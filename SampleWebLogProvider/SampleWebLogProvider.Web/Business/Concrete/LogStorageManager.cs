using SampleWebLogProvider.DataAccess;
using SampleWebLogProvider.DataAccess.Models;
using SampleWebLogProvider.Web.Models;
using SAmpleWebLogProvider.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SampleWebLogProvider.Web.Business.Concrete
{
    public class LogStorageManager : ILogStorageManager
    {
        private readonly ILogRepository _logRepository;
        private readonly IGithubService _githubService;

        private const string RepoOwner = "ptjuanramos";
        private const string RepoName = "getting-updated";

        public LogStorageManager(ILogRepository logRepository, IGithubService githubService)
        {
            _logRepository = logRepository;
            _githubService = githubService;
        }

        public async Task<bool> CreateIssue(LogViewModel logViewModel)
        {
            Issue issue = new()
            {
                Title = $"[{logViewModel.LogLevel}] - {logViewModel.Message}",
                Body = logViewModel.Message
            };

            bool issueWasCreated = await _githubService.CreateIssue(issue, RepoName, RepoOwner);

            if (issueWasCreated)
            {
                Log logToUpdate = logViewModel.ToDbModel();
                logToUpdate.IssueCreated = true;

                _logRepository.Update(logToUpdate);
            }

            return issueWasCreated;
        }

        public IEnumerable<LogViewModel> GetAll()
        {
            IEnumerable<Log> dbLogs = _logRepository.GetAll();
            return dbLogs?.Select(l => LogViewModel.FromDbModel(l)) ?? Enumerable.Empty<LogViewModel>();
        }
    }
}
