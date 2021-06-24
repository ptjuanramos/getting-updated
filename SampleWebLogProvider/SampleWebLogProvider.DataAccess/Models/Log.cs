using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampleWebLogProvider.DataAccess.Models
{
    [Table("Logs")]
    public class Log
    {
        [Key]
        public Guid Id { get; set; }

        public string Message { get; set; }

        public bool IssueCreated { get; set; }
    }
}
