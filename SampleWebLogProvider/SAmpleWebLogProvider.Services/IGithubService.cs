using System;
using System.Threading.Tasks;

namespace SAmpleWebLogProvider.Services
{
    public interface IGithubService
    {
        Task<bool> CreateIssue(Issue issue);
    }
}
