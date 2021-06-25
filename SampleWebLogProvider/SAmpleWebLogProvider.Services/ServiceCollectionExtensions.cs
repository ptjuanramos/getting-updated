using Microsoft.Extensions.DependencyInjection;
using SAmpleWebLogProvider.Services.Concrete;

namespace SAmpleWebLogProvider.Services
{
    public static class ServiceCollectionExtensions
    {
        public static void AddExternalServices(this IServiceCollection services)
        {
            services.AddTransient<IGithubService, GithubService>();
        }
    }
}
