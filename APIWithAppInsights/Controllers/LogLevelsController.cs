using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace APIWithAppInsights.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LogLevelsController : ControllerBase
    {
        private readonly ILogger<LogLevelsController> _logger;

        public LogLevelsController(ILogger<LogLevelsController> logger)
        {
            _logger = logger;
        }

        [HttpGet("warning")]
        public JsonResult Warning()
        {
            _logger.LogWarning($"This is a dummy log warning - {DateTime.Now}");
            return new JsonResult("Was logged");
        }

        [HttpGet("debug")]
        public JsonResult Debug()
        {
            _logger.LogDebug($"This is a dummy log debug - {DateTime.Now}");
            return new JsonResult("Was logged");
        }

        [HttpGet("information")]
        public JsonResult Information()
        {
            _logger.LogInformation($"This is a dummy log information - {DateTime.Now}");
            return new JsonResult("Was logged");
        }

        [HttpGet("error")]
        public JsonResult Error()
        {
            _logger.LogError($"This is a dummy log error - {DateTime.Now}");
            return new JsonResult("Was logged");
        }
    }
}
