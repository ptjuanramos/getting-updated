using CosmosDb.Learning.Data.Models;
using Microsoft.Azure.Cosmos;
using System.Threading.Tasks;

namespace CosmosDb.Learning.Data
{
    public interface IAuditCommand
    {
        public Task<ItemResponse<Audit>> AddAsync(Audit audit);
    }
}
