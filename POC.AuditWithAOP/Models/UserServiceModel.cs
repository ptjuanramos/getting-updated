﻿using POC.AuditWithAOP.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.AuditWithAOP.Models
{
    public class UserServiceModel
    {
        [Masked("this is a Id")]
        public Guid Id { get; set; }
        
        public string Name { get; set; }

        [Masked]
        public string Email { get; set; }

        public override string ToString()
        {
            return $"{{ Id: {Id}, Name: {Name}, Email: {Email}}}";
        }
    }
}
