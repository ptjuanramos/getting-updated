using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SampleWebLogProvider.DataAccess;
using SampleWebLogProvider.DataAccess.Models;
using SampleWebLogProvider.Web.Business;
using SampleWebLogProvider.Web.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SampleWebLogProvider.Web.Controllers
{
    public class LogStorageController : Controller
    {
        private readonly ILogStorageManager _logStorageManager;

        public LogStorageController(ILogStorageManager logStorageManager)
        {
            _logStorageManager = logStorageManager;
        }

        public IActionResult Index() => View(_logStorageManager.GetAll());

        [HttpPost]
        public async Task<IActionResult> CreateIssue(LogViewModel logViewModel)
        {
            await _logStorageManager.CreateIssue(logViewModel);
            return RedirectToAction(nameof(Index));
        }
    }
}
