using Microsoft.Extensions.Logging;
using POC.AuditWithAOP.Interceptors;
using POC.AuditWithAOP.Models;
using System;

namespace POC.AuditWithAOP
{
    public class UserService : IUserService
    {
        private readonly ILogger<UserService> _logger;

        public UserService(ILogger<UserService> logger) => _logger = logger;

        [AuditInterceptor]
        public UserServiceModel Add(UserServiceModel user)
        {
            _logger.LogInformation($"New user was added {user}");
            return user;
        }

        [AuditInterceptor]
        public bool Delete(UserServiceModel user)
        {
            _logger.LogInformation($"User was deleted {user}");
            return true;
        }

        [AuditInterceptor]
        public UserServiceModel Get(Guid id)
        {
            UserServiceModel user = new(Guid.NewGuid(), "User name", "email@email.com");
            _logger.LogInformation($"User was deleted {user}");

            return user;
        }
    }
}
