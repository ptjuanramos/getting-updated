using SampleWebLogProvider.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SampleWebLogProvider.Web.Business
{
    public interface ILogStorageManager
    {
        IEnumerable<LogViewModel> GetAll();

        Task<LogViewModel> CreateIssue(LogViewModel logViewModel);
    }
}
