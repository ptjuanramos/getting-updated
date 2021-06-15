using CosmosDb.Learning.Data.Models;
using System;

namespace CosmosDb.Learning.Data
{
    public interface IAuditCommand
    {
        public Audit Add(Audit audit);
    }
}
