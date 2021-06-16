using CosmosDb.Learning.Data.Models;
using Microsoft.Azure.Cosmos;
using System;
using System.Threading.Tasks;

namespace CosmosDb.Learning.Data.Concrete
{
    internal class AuditCommand : IAuditCommand
    {
        private readonly Container _cosmosContainer;

        public AuditCommand(CosmosClient cosmosClient)
        {
            _cosmosContainer = cosmosClient.GetContainer("Audits", "AuditsContainer");
        }

        public async Task<ItemResponse<Audit>> AddAsync(Audit audit)
        {
            return await _cosmosContainer.CreateItemAsync(audit);
        }
    }
}
