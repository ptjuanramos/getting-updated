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
            CosmosClient client = new("", "");
            return new(client);
        }
    }
}
