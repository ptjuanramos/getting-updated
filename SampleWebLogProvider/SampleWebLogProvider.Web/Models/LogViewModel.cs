using Microsoft.Extensions.Logging;
using SampleWebLogProvider.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SampleWebLogProvider.Web.Models
{
    public class LogViewModel
    {
        public Guid Id { get; set; }

        public LogLevel LogLevel { get; set; }

        public string Message { get; set; }

        public bool IssueCreated { get; set; }

        internal static LogViewModel FromDbModel(Log log)
        {
            if (log == null)
                return null;

            return new LogViewModel {
                Id = log.Id,
                IssueCreated = log.IssueCreated,
                LogLevel = log.LogLevel,
                Message = log.Message
            };
        }

        internal Log ToDbModel()
        {
            return new Log
            {
                Id = Id,
                IssueCreated = IssueCreated,
                LogLevel = LogLevel,
                Message = Message
            };
        }
    }
}
