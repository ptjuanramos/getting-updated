using POC.AuditWithAOP.Models;
using System;

namespace POC.AuditWithAOP
{
    public interface IUserService
    {
        UserServiceModel Add(UserServiceModel user);

        UserServiceModel Get(Guid id);

        bool Delete(UserServiceModel user);
    }
}