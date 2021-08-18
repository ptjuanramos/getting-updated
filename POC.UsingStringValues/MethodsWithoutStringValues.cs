using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.UsingStringValues
{
    public static class MethodsWithoutStringValues
    {
        public static readonly List<string> _values = new();

        public static void AddValue(string value)
        {
            _values.Add(value);
        }

        public static void AddValues(string[] values)
        {
            foreach(string value in values)
            {
                AddValue(value);
            }
        }
    }
}
