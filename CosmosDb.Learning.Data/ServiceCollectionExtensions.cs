using CosmosDb.Learning.Data.Concrete;
using Microsoft.Azure.Cosmos;
using Microsoft.Extensions.DependencyInjection;

namespace CosmosDb.Learning.Data
{
    public static class ServiceCollectionExtensions
    {
        public static void AddCommands(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<IAuditCommand>((_) => InitializeAuditCommandInstanceAsync());
        }

        private static AuditCommand InitializeAuditCommandInstanceAsync()
        {
            CosmosClient client = new (
                "https://cosmosdb-audit-poc.documents.azure.com:443/", 
                "v9Ea0pfThRwcpIIOHtnORFcdXNp5gIXjhYYgMkUkWNqQ87Ztu1zPavnHnTPdEhIdtyeEj9eLm2Qygqr8JdfRHw=="
            );

            return new(client);
        }
    }
}
