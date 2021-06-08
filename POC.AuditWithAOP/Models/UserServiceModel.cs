using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.AuditWithAOP.Models
{
    public record UserServiceModel(Guid Id, string Name, string Email)
    {
    }
}
