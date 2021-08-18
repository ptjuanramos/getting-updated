using SampleProject.Reporting;
using System;

namespace SampleProject.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            ReportHandler reportHandler = new(ActionAndFuncExamples.FuncExample);
            Report report = new("Andre Ferreira", DateTime.Now, "This is a serious a report");
            reportHandler.Handle(report);
        }
    }
}
