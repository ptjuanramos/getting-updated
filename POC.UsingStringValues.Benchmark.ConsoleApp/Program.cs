using BenchmarkDotNet.Running;
using POC.UsingStringValues.Benchmark.ConsoleApp;

BenchmarkRunner.Run(typeof(WithOrWithoutStringValues).Assembly);
