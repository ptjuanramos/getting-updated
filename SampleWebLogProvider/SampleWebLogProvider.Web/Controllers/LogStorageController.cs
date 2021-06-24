using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace SampleWebLogProvider.Web.Controllers
{
    public class LogStorageController : Controller
    {
        private readonly ILogger<LogStorageController> _logger;

        public LogStorageController(ILogger<LogStorageController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
