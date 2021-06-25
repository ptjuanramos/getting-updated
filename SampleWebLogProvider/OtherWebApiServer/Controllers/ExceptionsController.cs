using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OtherWebApiServer.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ExceptionsController : ControllerBase
    {
        private readonly Random _random = new();
        private readonly ILogger<ExceptionsController> _logger;

        public ExceptionsController(ILogger<ExceptionsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public JsonResult Error()
        {
            int errorNumber = _random.Next(0, 1000000000);
            _logger.LogError($"Error log number {errorNumber}");

            return new JsonResult("");
        }

        [HttpGet]
        public JsonResult Critical()
        {
            int errorNumber = _random.Next(0, 1000000000);
            _logger.LogCritical($"Critical log number {errorNumber}");

            return new JsonResult("");
        }

        [HttpGet]
        public JsonResult Info()
        {
            int errorNumber = _random.Next(0, 1000000000);
            _logger.LogInformation($"Info log number {errorNumber}");

            return new JsonResult("");
        }
    }
}
