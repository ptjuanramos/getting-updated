using BenchmarkDotNet.Attributes;
using NetAndMinAPI.Controllers;
using System;
using System.Threading.Tasks;

namespace NetAndMinAPI.Benchmark.ConsoleApp
{
    [MemoryDiagnoser]
    public class UserControllerBenchmark
    {
        [Benchmark]
        public async Task TestingValueTasksInWebApis()
        {
            UserController userController = new(null);
            await userController.TestingValueTasksInWebApis();
        }

        [Benchmark]
        public async Task TestingWithoutValueTasksInWebApis()
        {
            UserController userController = new(null);
            await userController.TestingWithoutValueTasksInWebApis();
        }
    }
}
