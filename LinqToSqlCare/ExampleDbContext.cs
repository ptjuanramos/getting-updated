using Microsoft.EntityFrameworkCore;

namespace LinqToSqlCare
{
    public class ExampleDbContext
    {
        public DbSet<User> Users { get; set; }
    }
}
