using Microsoft.AspNetCore.Mvc;
using SampleWebLogProvider.Web.Business;
using SampleWebLogProvider.Web.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SampleWebLogProvider.Web.Areas.LogStorageApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogStorageController : ControllerBase
    {
        private readonly ILogStorageManager _logStorageManager;

        public LogStorageController(ILogStorageManager logStorageManager)
        {
            _logStorageManager = logStorageManager;
        }

        public IEnumerable<LogViewModel> GetAll() => _logStorageManager.GetAll();

        [HttpPost]
        public async Task<LogViewModel> Create(LogViewModel log) {
            return await _logStorageManager.CreateIssue(log); ;
        }
    }
}
