using Microsoft.AspNetCore.Mvc;
using POC.AuditWithAOP;
using System;

namespace NetAndMinAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

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
    }
}
