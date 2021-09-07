using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.CompleteTaskVsFromResult
{
    public static class Utils
    {
        public static void AppendLines(int count = 1)
        {
            StringBuilder stringBuilder = new();

            for (int i = 0; i < count; i++)
            {
                stringBuilder.AppendLine("Teste " + i);
            }
        }
    }
}
