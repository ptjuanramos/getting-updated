using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.CompleteTaskVsFromResult
{
    public static class MethodsWithFromResult
    {
        public static Task LongMethod()
        {
            Utils.AppendLines(1000);
            return Task.FromResult(0);
        }

        public static Task ShortMethod()
        {
            Utils.AppendLines();
            return Task.FromResult(0);
        }
    }
}
