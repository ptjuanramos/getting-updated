using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;

namespace POC.CompleteTaskVsFromResult
{
    class Program
    {
        static void Main(string[] args)
        {
            BenchmarkRunner.Run(typeof(WithOrWithoutFromResult).Assembly);
        }
    }

    [MemoryDiagnoser]
    public class WithOrWithoutFromResult
    {
        [Benchmark]
        public void LongMethodWithCompleteTask()
        {
            MethodsWithCompleteTask.LongMethod();
        }

        [Benchmark]
        public void ShortMethodWithCompleteTask()
        {
            MethodsWithCompleteTask.ShortMethod();
        }

        [Benchmark]
        public void LongMethodWithFromResult()
        {
            MethodsWithFromResult.LongMethod();
        }

        [Benchmark]
        public void ShortMethodWithFromResult()
        {
            MethodsWithFromResult.ShortMethod();
        }
    }
}
