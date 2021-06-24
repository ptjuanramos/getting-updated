using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SampleWebLogProvider.Web.Areas.LogStorageApi.Models
{
    public record Log
    {
        public Guid Id { get; set; }
        public string Message { get; set; }
        public LogLevel LogLevel { get; set; }
    }
}
