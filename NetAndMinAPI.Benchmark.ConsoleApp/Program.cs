using BenchmarkDotNet.Running;
using NetAndMinAPI.Benchmark.ConsoleApp;

BenchmarkRunner.Run(typeof(UserControllerBenchmark).Assembly);
