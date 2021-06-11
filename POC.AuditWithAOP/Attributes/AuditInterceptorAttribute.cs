using AspectCore.DynamicProxy;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using POC.AuditWithAOP.Serialization;
using System.Reflection;

namespace POC.AuditWithAOP.Attributes
{
    public class AuditInterceptorAttribute : AbstractInterceptorAttribute
    {

        private static string GetFullMethodName(MethodInfo methodInfo)
        {
            string methodName = methodInfo.Name;
            string className = methodInfo.ReflectedType.Name;

            return className + "." + methodName;
        }

        public async override Task Invoke(AspectContext context, AspectDelegate next)
        {
            ILogger<AuditInterceptorAttribute> logger = context.ServiceProvider.GetService<ILogger<AuditInterceptorAttribute>>();

            logger.LogInformation($"Method {GetFullMethodName(context.ImplementationMethod)} intercepted");

            await next(context);

            SerializationHelper serializationHelper = new(context);
            string resultJson = serializationHelper.GetReturnAsJson();
            logger.LogInformation($"Intercepted result {resultJson}");
        }
    }
}
