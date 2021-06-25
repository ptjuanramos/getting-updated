using Microsoft.Extensions.Logging;
using SampleWebLogProvider.DataAccess;
using SampleWebLogProvider.DataAccess.Models;
using System;

namespace SampleWebLogProvider
{
    internal class WebLogger : ILogger
    {
        private readonly ILogRepository _logRepository;

        public WebLogger(ILogRepository logRepository)
        {
            _logRepository = logRepository;
        }

        public IDisposable BeginScope<TState>(TState state) => default;

        public bool IsEnabled(LogLevel logLevel) => true; //This actually needs to check from the appSettings configurations

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            string message = formatter(state, exception);

            bool wasCreated =_logRepository.Create(new Log
            {
                Id = Guid.NewGuid(),
                LogLevel = logLevel,
                Message = message
            });

            if (!wasCreated)
                throw new Exception("Couldn't create log into the database");
        }
    }
}
