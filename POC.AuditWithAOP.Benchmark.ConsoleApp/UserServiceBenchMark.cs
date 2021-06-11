using BenchmarkDotNet.Attributes;
using Microsoft.Extensions.Logging;
using POC.AuditWithAOP.Models;
using System;

namespace POC.AuditWithAOP.Benchmark.ConsoleApp
{
    [MarkdownExporter, AsciiDocExporter, HtmlExporter, CsvExporter, RPlotExporter]
    public class UserServiceBenchMark
    {
        public static ILoggerFactory LogFactory { get; } = LoggerFactory.Create(builder =>
        {
            builder.ClearProviders();
            builder.AddSimpleConsole(options =>
            {
                options.IncludeScopes = true;
                options.SingleLine = true;
                options.TimestampFormat = "hh:mm:ss ";
            }).SetMinimumLevel(LogLevel.Warning);
        });

        public static ILogger<T> CreateLogger<T>() => LogFactory.CreateLogger<T>();

        [Benchmark]
        public void AddWithProxy()
        {
            UserService userService = new(CreateLogger<UserService>());
            userService.Add(new UserServiceModel
            {
                AccountNumber = 123456,
                Email = "insecureemail@email.com",
                Id = Guid.NewGuid(),
                Name = "My name"
            });
        }

        [Benchmark]
        public void AddWithoutProxy()
        {
            UserService userService = new(CreateLogger<UserService>());
            userService.AddWithoutProxy(new UserServiceModel
            {
                AccountNumber = 123456,
                Email = "insecureemail@email.com",
                Id = Guid.NewGuid(),
                Name = "My name"
            });
        }
    }
}
