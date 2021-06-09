using System;

namespace POC.AuditWithAOP.Attributes
{
    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Parameter | AttributeTargets.Property)]
    public class MaskedAttribute : Attribute
    {
        private const string DefaultReplaceableValue = "*****";

        public string ReplaceableValue { get; init; }

        public MaskedAttribute(string replaceableValue = DefaultReplaceableValue)
        {
            ReplaceableValue = replaceableValue;
        }
    }
}
