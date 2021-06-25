using Flurl;
using Microsoft.Extensions.Options;
using SampleWebLogProvider.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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

        public async Task<bool> CreateIssue(Issue issue)
        {
            GithubConfiguration githubConfiguration = _githubConfigMonitor.CurrentValue;
            string url = Url.Combine(githubConfiguration.BaseUrl, githubConfiguration.IssueEndpoint);
            string issueAsString = JsonSerializer.Serialize(issue);
            StringContent postContent = new(issueAsString, Encoding.UTF8);

            HttpClient httpClient = new();

            HttpResponseMessage responseMessage = await httpClient.PostAsync(url, postContent);
            if (responseMessage.StatusCode == HttpStatusCode.OK)
                return true;

            return false;
        }
    }
}
