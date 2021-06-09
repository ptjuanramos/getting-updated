using AspectCore.DynamicProxy;
using POC.AuditWithAOP.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;
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
            MaskProperties(returnValue, returnType);

            return JsonSerializer.Serialize(returnValue, returnType);
        }

        private static void MaskProperties(object instance, Type type)
        {
            foreach(PropertyInfo propertyInfo in type.GetProperties())
            {
                MaskedAttribute maskedAttribute = propertyInfo.GetCustomAttribute<MaskedAttribute>(); //TODO find a better way to filter PropertyInfo[]

                if (maskedAttribute != null)
                {
                    string newValue = maskedAttribute.ReplaceableValue;
                    propertyInfo.SetValue(instance, Convert.ChangeType(newValue, propertyInfo.PropertyType), null); //TODO This works because the property type is a string,
                    //I belieave that the best way is to change the value in the serialization flow
                }
            }
        }
    }
}
