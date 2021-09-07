using POC.AuditWithAOP.Models;
using System;

namespace NetAndMinAPI
{
    public record User(Guid Id, string Name, string Email)
    {
        public static implicit operator User(UserServiceModel userServiceModel)
        {
            return new(userServiceModel.Id, userServiceModel.Name, userServiceModel.Email);
        }

        public static implicit operator UserServiceModel(User user)
        {
            return new UserServiceModel
            {
                Id = user.Id,
                Email = user.Email,
                Name = user.Name
            };
        }

        public void Deconstruct(out string name, out string email)
        {
            name = Name;
            email = Email;
        }

        public void Deconstruct(out string name)
        {
            name = Name;
        }
    }
}
