using System;

namespace SampleWebLogProvider.Common
{
    public class GithubConfiguration
    {
        public const string Section = "GithubConfig";

        public string Key { get; set; }
        public string Username { get; set; }

        public string BaseUrl { get; set; }
        public string IssueEndpoint { get; set; }
    }
}
