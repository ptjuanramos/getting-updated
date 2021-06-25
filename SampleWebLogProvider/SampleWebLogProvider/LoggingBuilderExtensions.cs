using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Configuration;
using SampleWebLogProvider.DataAccess;
using SampleWebLogProvider.DataAccess.Concrete;

namespace SampleWebLogProvider
{
    public static class LoggingBuilderExtensions
    {
        public static ILoggingBuilder AddWebLogger(this ILoggingBuilder loggingBuilder, IConfiguration configuration)
        {
            loggingBuilder.AddConfiguration();

            loggingBuilder.Services.AddDbContextFactory<LogDbContext>(opts => opts.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));
            
            loggingBuilder.Services.AddSingleton<ILogRepository, LogRepository>();
            loggingBuilder.Services.AddSingleton<ILoggerProvider, WebLogProvider>();

            return loggingBuilder;
        }
    }
}
