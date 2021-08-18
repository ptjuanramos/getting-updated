using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqToSqlCare
{
    public class UserQuery
    {
        private readonly ExampleDbContext _exampleDbContext;

        public UserQuery(ExampleDbContext exampleDbContext)
        {
            _exampleDbContext = exampleDbContext;
        }

        //public bool IsUserExists(string email)
        //{
        //    _exampleDbContext.Users.Where()
        //}
    }
}
