using AspectCore.DynamicProxy;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using POC.AuditWithAOP.Serialization;

namespace POC.AuditWithAOP.Attributes
{
    public class AuditInterceptorAttribute : AbstractInterceptorAttribute
    {
        public async override Task Invoke(AspectContext context, AspectDelegate next)
        {
            ILogger<AuditInterceptorAttribute> logger = context.ServiceProvider.GetService<ILogger<AuditInterceptorAttribute>>();

            string methodName = next.Method.Name;
            logger.LogInformation($"Method {methodName} intercepted");

            await next(context);

            SerializationHelper serializationHelper = new(context);
            string resultJson = serializationHelper.GetReturnAsJson();
            logger.LogInformation($"Intercepted result {resultJson}");
        }
    }
}
