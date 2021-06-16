using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace CosmosDb.Learning.Data.Models
{
    public class Audit
    {
        //TODO - open or search for a issue related with Sytem.Text.Json, which doesn't work with CosmosClient

        [JsonProperty("id")]
        public Guid Id { get; set; }

        [JsonProperty("method")]
        public string Method { get; set; }

        [JsonProperty("auditMessage")]
        public string AuditMessage { get; set; }
    }
}
