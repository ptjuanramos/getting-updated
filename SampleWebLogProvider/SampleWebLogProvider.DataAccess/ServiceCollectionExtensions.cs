using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SampleWebLogProvider.DataAccess.Concrete;

namespace SampleWebLogProvider.DataAccess
{
    public static class ServiceCollectionExtensions
    {
        public static void AddLogRepository(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContextFactory<LogDbContext>(opts => opts.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));
            services.AddTransient<ILogRepository, LogRepository>();
        }
    }
}
