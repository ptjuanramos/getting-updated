using BenchmarkDotNet.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;

namespace POC.UsingStringValues.Benchmark.ConsoleApp
{
    [MemoryDiagnoser]
    public class WithOrWithoutStringValues
    {
        [Benchmark]
        public void AddSingleValueWithStringValues()
        {
            MethodsWithStringValues.AddValues("single-value");
        }

        [Benchmark]
        public void AddSingleValueWithoutStringValues()
        {
            MethodsWithoutStringValues.AddValue("single-value");
        }

        [Benchmark]
        public void AddMultipleValuesWithStringValues()
        {
            MethodsWithStringValues.AddValues(new string[] { "1" });
        }

        [Benchmark]
        public void AddMultipleValuesWithoutStringValues()
        {
            MethodsWithoutStringValues.AddValues(new string[] { "1" });
        }
    }
}
