``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.19041.1052 (2004/May2020Update/20H1)
Intel Core i7-10610U CPU 1.80GHz, 1 CPU, 8 logical and 4 physical cores
.NET SDK=6.0.100-preview.4.21255.9
  [Host]     : .NET 6.0.0 (6.0.21.25307), X64 RyuJIT  [AttachedDebugger]
  DefaultJob : .NET 6.0.0 (6.0.21.25307), X64 RyuJIT


```
|                            Method |     Mean |    Error |   StdDev |   Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|---------------------------------- |---------:|---------:|---------:|---------:|-------:|------:|------:|----------:|
|        TestingValueTasksInWebApis | 58.61 ns | 1.128 ns | 1.427 ns | 58.65 ns | 0.0172 |     - |     - |      72 B |
| TestingWithoutValueTasksInWebApis | 52.13 ns | 1.659 ns | 4.679 ns | 50.37 ns | 0.0344 |     - |     - |     144 B |
