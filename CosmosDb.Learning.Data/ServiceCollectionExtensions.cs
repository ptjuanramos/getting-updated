using CosmosDb.Learning.Data.Concrete;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CosmosDb.Learning.Data
{
    public static class ServiceCollectionExtensions
    {
        public static void AddCommands(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<IAuditCommand, AuditCommand>();
        }
    }
}
