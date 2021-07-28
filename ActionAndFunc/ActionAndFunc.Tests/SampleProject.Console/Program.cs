using SampleProject.Reporting;
using System;

namespace SampleProject.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            ReportHandler reportHandler = new((r => false));
            Report report = new("Juan Ramos", DateTime.Now, "This is a serious a report");
            reportHandler.Handle(report);
        }
    }
}
