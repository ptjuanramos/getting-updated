``` ini

BenchmarkDotNet=v0.13.1, OS=Windows 10.0.19042.1165 (20H2/October2020Update)
Intel Core i7-10610U CPU 1.80GHz, 1 CPU, 8 logical and 4 physical cores
.NET SDK=6.0.100-preview.7.21379.14
  [Host]     : .NET 5.0.9 (5.0.921.35908), X64 RyuJIT  [AttachedDebugger]
  DefaultJob : .NET 5.0.9 (5.0.921.35908), X64 RyuJIT


```
|                      Method |         Mean |        Error |       StdDev |       Median |   Gen 0 |  Gen 1 | Allocated |
|---------------------------- |-------------:|-------------:|-------------:|-------------:|--------:|-------:|----------:|
|  LongMethodWithCompleteTask | 35,607.27 ns |   421.381 ns |   373.543 ns | 35,624.63 ns | 24.9634 | 0.0610 | 104,856 B |
| ShortMethodWithCompleteTask |     37.50 ns |     0.595 ns |     0.527 ns |     37.47 ns |  0.0344 |      - |     144 B |
|    LongMethodWithFromResult | 44,421.33 ns | 1,261.625 ns | 3,516.907 ns | 42,858.66 ns | 24.9634 | 0.0610 | 104,928 B |
|   ShortMethodWithFromResult |     49.71 ns |     0.836 ns |     1.225 ns |     49.39 ns |  0.0516 |      - |     216 B |
