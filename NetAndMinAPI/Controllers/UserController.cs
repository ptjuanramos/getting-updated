using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using POC.AuditWithAOP;
using System;
using System.Threading.Tasks;

namespace NetAndMinAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly IUserService _userService;
        
        private static User s_user;

        public UserController(ILogger<UserController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpPost("user")]
        public User CreateUser(User user)
        {
            (string name, string email) = user;

            _logger.LogInformation($"This is the name {name}");
            _logger.LogInformation($"This is the email {email}");

            return user;
        }

        [HttpGet("operations")]
        public User RunPOCOperations()
        {
            User result = _userService.Add(
                new()
                {
                    Id = Guid.NewGuid(),
                    Name = "User name",
                    Email = "email@email.com"
                }
            );

            CreateUser(result);
            _userService.Delete(result);
            return _userService.Get(Guid.NewGuid());
        }

        [HttpGet("valuetasks")]
        public async ValueTask<User> TestingValueTasksInWebApis()
        {
            if(s_user == null)
            {
                return await Task.Run(() =>
                {
                    s_user = new(Guid.NewGuid(), "New user", "email@email.com");
                    return s_user;
                });
            }

            return s_user;
        }

        [HttpGet("withoutvaluetasks")]
        public async Task<User> TestingWithoutValueTasksInWebApis()
        {
            if (s_user == null)
            {
                return await Task.Run(() =>
                {
                    s_user = new(Guid.NewGuid(), "New user", "email@email.com");
                    return s_user;
                });
            }

            return s_user;
        }
    }
}
