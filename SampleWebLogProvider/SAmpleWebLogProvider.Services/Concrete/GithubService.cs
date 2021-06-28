using Flurl;
using Microsoft.Extensions.Options;
using SampleWebLogProvider.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace SAmpleWebLogProvider.Services.Concrete
{
    internal class GithubService : IGithubService
    {
        private readonly IOptionsMonitor<GithubConfiguration> _githubConfigMonitor;

        public GithubService(IOptionsMonitor<GithubConfiguration> githubConfigMonitor)
        {
            _githubConfigMonitor = githubConfigMonitor;
        }

        public async Task<bool> CreateIssue(Issue issue, string repo, string owner)
        {
            GithubConfiguration githubConfiguration = _githubConfigMonitor.CurrentValue;
            string endpoint = string.Format(githubConfiguration.IssueEndpoint, owner, repo);
            string url = Url.Combine(githubConfiguration.BaseUrl, endpoint);
            string issueAsString = JsonSerializer.Serialize(issue);
            StringContent postContent = new(issueAsString, Encoding.UTF8);

            HttpClient httpClient = new();

            byte[] authenticationBytes = Encoding.ASCII.GetBytes($"{githubConfiguration.Username}:{githubConfiguration.Key}");
            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(authenticationBytes));
            httpClient.DefaultRequestHeaders.UserAgent.ParseAdd("Mozilla/5.0 (compatible; AcmeInc/1.0)");

            HttpResponseMessage responseMessage = await httpClient.PostAsync(url, postContent);
            if (responseMessage.StatusCode == HttpStatusCode.Created)
                return true;

            return false;
        }
    }
}
