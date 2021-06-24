using Microsoft.AspNetCore.Mvc;
using SampleWebLogProvider.Web.Areas.LogStorageApi.Models;

namespace SampleWebLogProvider.Web.Areas.LogStorageApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogStorageController : ControllerBase
    {
        public LogStorageController()
        {

        }

        [HttpPost]
        public JsonResult Create(Log log)
        {
            return null;
        }
    }
}
