using SampleProject.Reporting;
using System;

namespace SampleProject.Console
{
    internal class ActionAndFuncExamples
    {
        public static readonly Action<Report> ActionExample = (report) => System.Console.WriteLine(report.ToString());

        public static readonly Func<Report, bool> FuncExample = (report) =>
        {
            if(report.Author != "Juan Ramos")
                return false;

            return true;
        };
    }
}
