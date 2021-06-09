using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.AuditWithAOP.Attributes
{
    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Parameter | AttributeTargets.Property)]
    public class MaskedAttribute : Attribute
    {
        private const string DefaultReplaceableValue = "*****";
        public readonly string ReplaceableValue;

        public MaskedAttribute(string replaceableValue = DefaultReplaceableValue)
        {
            ReplaceableValue = replaceableValue;
        }
    }
}
