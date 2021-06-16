using Microsoft.AspNetCore.Mvc;
using POC.AuditWithAOP;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace NetAndMinAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private static User s_user;

        public UserController(IUserService userService)
        {
            _userService = userService;
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
                    Thread.Sleep(1000);

                    return s_user;
                });
            }

            return s_user;
        }
    }
}
