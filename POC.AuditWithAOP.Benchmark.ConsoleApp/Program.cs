using BenchmarkDotNet.Running;
using POC.AuditWithAOP.Benchmark.ConsoleApp;

BenchmarkRunner.Run(typeof(UserServiceBenchMark).Assembly);