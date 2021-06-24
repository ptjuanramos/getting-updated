using Microsoft.EntityFrameworkCore;
using SampleWebLogProvider.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampleWebLogProvider.DataAccess
{
    public class LogDbContext : DbContext
    {
        public DbSet<Log> Logs { get; set; }
    }
}
