using AspectCore.DynamicProxy;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace POC.AuditWithAOP.Interceptors
{
    public class AuditInterceptorAttribute : AbstractInterceptorAttribute
    {
        public override Task Invoke(AspectContext context, AspectDelegate next)
        {
            ILogger<AuditInterceptorAttribute> logger = context.ServiceProvider.GetService<ILogger<AuditInterceptorAttribute>>();

            string methodName = next.Method.Name;
            logger.LogInformation($"Method {methodName} intercepted");

            return next(context);
        }
    }
}
