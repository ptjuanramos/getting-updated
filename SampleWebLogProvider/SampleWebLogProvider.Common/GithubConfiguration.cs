using System;

namespace SampleWebLogProvider.Common
{
    public class GithubConfiguration
    {
        public string Key { get; set; }

        public string BaseUrl { get; set; }
        public string IssueEndpoint { get; set; }
    }
}
