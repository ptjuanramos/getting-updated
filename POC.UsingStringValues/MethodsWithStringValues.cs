using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Generic;

namespace POC.UsingStringValues
{
    public static class MethodsWithStringValues
    {
        public static readonly List<string> _values = new();

        public static void AddValues(StringValues values)
        {
            foreach(string value in values)
            {
                _values.Add(value);
            }
        }
    }
}
