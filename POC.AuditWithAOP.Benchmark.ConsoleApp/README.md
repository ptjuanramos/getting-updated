``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.19041.985 (2004/May2020Update/20H1)
Intel Core i7-10610U CPU 1.80GHz, 1 CPU, 8 logical and 4 physical cores
.NET SDK=6.0.100-preview.4.21255.9
  [Host]     : .NET 6.0.0 (6.0.21.25307), X64 RyuJIT  [AttachedDebugger]
  DefaultJob : .NET 6.0.0 (6.0.21.25307), X64 RyuJIT


```
|          Method |     Mean |     Error |    StdDev |   Median |
|---------------- |---------:|----------:|----------:|---------:|
|    AddWithProxy | 1.299 μs | 0.0718 μs | 0.2012 μs | 1.289 μs |
| AddWithoutProxy | 1.088 μs | 0.0308 μs | 0.0890 μs | 1.050 μs |
