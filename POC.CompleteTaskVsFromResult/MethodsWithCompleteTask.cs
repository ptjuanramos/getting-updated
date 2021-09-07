using System.Text;
using System.Threading.Tasks;

namespace POC.CompleteTaskVsFromResult
{
    public static class MethodsWithCompleteTask
    {
        public static Task LongMethod()
        {
            Utils.AppendLines(1000);
            return Task.CompletedTask;
        }

        public static Task ShortMethod()
        {
            Utils.AppendLines();
            return Task.CompletedTask;
        }
    }
}
