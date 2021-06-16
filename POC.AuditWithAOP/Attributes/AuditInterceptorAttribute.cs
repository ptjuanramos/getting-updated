using System;
using AspectCore.DynamicProxy;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using POC.AuditWithAOP.Serialization;
using System.Reflection;
using CosmosDb.Learning.Data;
using CosmosDb.Learning.Data.Models;
using Microsoft.Azure.Cosmos;
using System.Net;

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

        private static async Task RegistAudit(AspectContext context, ILogger<AuditInterceptorAttribute> logger, string auditJson, string methodName)
        {
            IAuditCommand auditCommand = context.ServiceProvider.GetService<IAuditCommand>();

            Audit newAudit = new()
            {
                Id = Guid.NewGuid(),
                AuditMessage = auditJson,
                Method = methodName
            };

            ItemResponse<Audit> response = await auditCommand.AddAsync(newAudit);
            logger.LogInformation(response.ToString());
        }

        public async override Task Invoke(AspectContext context, AspectDelegate next)
        {
            ILogger<AuditInterceptorAttribute> logger = context.ServiceProvider.GetService<ILogger<AuditInterceptorAttribute>>();
            string methodName = GetFullMethodName(context.ImplementationMethod);
            
            logger.LogInformation($"Method {methodName} intercepted");

            await next(context);

            SerializationHelper serializationHelper = new(context);
            string resultJson = serializationHelper.GetReturnAsJson();

            await RegistAudit(context, logger, resultJson, methodName);
        }
    }
}
