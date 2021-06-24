using POC.AuditWithAOP.Attributes;
using System;

namespace POC.AuditWithAOP.Models
{
    public class UserServiceModel
    {
        //[Masked]
        public Guid Id { get; set; }
        
        public string Name { get; set; }

        [Masked("account-number")]
        public int AccountNumber { get; set; }

        [Masked]
        public string Email { get; set; }

        public override string ToString()
        {
            return $"{{ Id: {Id}, Name: {Name}, Email: {Email}}}";
        }
    }
}
