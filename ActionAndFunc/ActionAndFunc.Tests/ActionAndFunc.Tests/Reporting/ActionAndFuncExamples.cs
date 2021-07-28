using SampleProject.Reporting;
using System;

namespace ActionAndFunc.Tests.Reporting
{
    internal class ActionAndFuncExamples
    {
        public static readonly Action<Report> ActionExample = (report) => Console.WriteLine(report.ToString());

        public static readonly Func<Report, bool> FuncExample = (report) =>
        {
            if(report.Author != "Juan Ramos")
                return false;

            return true;
        };
    }
}
