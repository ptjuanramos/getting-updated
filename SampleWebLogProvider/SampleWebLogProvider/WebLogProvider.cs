using Microsoft.Extensions.Logging;
using SampleWebLogProvider.DataAccess;

namespace SampleWebLogProvider
{
    public class WebLogProvider : ILoggerProvider
    {
        private readonly ILogRepository _logRepository;

        public WebLogProvider(ILogRepository logRepository)
        {
            _logRepository = logRepository;
        }

        public ILogger CreateLogger(string categoryName) => new WebLogger(_logRepository); //Don't look at this, just follow Microsoft doc: https://docs.microsoft.com/en-us/dotnet/core/extensions/custom-logging-provider#custom-logger-provider

        public void Dispose()
        {
        }
    }
}
