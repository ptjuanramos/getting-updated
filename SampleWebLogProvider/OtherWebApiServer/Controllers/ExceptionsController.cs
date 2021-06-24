using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OtherWebApiServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
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
            _logger.LogError($"Error number {errorNumber}");

            return new JsonResult("");
        }

        [HttpGet]
        public JsonResult Info()
        {
            int errorNumber = _random.Next(0, 1000000000);
            _logger.LogError($"Error number {errorNumber}");

            return new JsonResult("");
        }
    }
}
