using AspectCore.DynamicProxy;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using POC.AuditWithAOP.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace POC.AuditWithAOP.Serialization
{
    class SerializationHelper
    {
        private readonly AspectContext _aspectContext;

        public SerializationHelper(AspectContext aspectContext)
        {
            _aspectContext = aspectContext;
        }

        public string GetReturnAsJson()
        {
            object returnValue = _aspectContext.ReturnValue;

            Type returnType = returnValue.GetType();

            string beforeMaskedJson = JsonConvert.SerializeObject(returnValue, returnType, null);
            try
            {
                JObject json = JObject.Parse(beforeMaskedJson);
                IEnumerable<Tuple<string, MaskedAttribute>> maskedProperties = GetMaskedPropertyNames(returnType);

                foreach (JProperty property in json.Properties())
                {
                    Tuple<string, MaskedAttribute> info = maskedProperties.FirstOrDefault(mp => mp.Item1 == property.Name);
                    if (info != null)
                        property.Value = info.Item2.ReplaceableValue;
                }

                return json.ToString();
            } catch
            {
                return beforeMaskedJson;
            }
        }


        private static bool HasMaskedAttribute(PropertyInfo propertyInfo) => Attribute.IsDefined(propertyInfo, typeof(MaskedAttribute));
        private static IEnumerable<Tuple<string, MaskedAttribute>> GetMaskedPropertyNames(Type type) => type
            .GetProperties()
            .Where(p => HasMaskedAttribute(p))
            .Select(p => new Tuple<string, MaskedAttribute>(p.Name, p.GetCustomAttribute<MaskedAttribute>()));
    }
}
