using AspectCore.Configuration;
using AspectCore.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using POC.AuditWithAOP.Interceptors;

namespace POC.AuditWithAOP
{
    public static class ServiceCollectionExtensions
    {
        public static void AddAuditInterceptor(this IServiceCollection services)
        {
            services.ConfigureDynamicProxy(config => config.Interceptors.AddTyped<AuditInterceptorAttribute>());
        }
    }
}
