using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampleWebLogProvider
{
    public static class HostBuilderExtensions
    {
        public static IHostBuilder ConfigureWebLogging(this IHostBuilder hostBuilder)
        {
            hostBuilder.ConfigureLogging((hostingContext, builder) =>
            {
                builder
                    .ClearProviders()
                    .AddWebLogger(hostingContext.Configuration);
            });

            return hostBuilder;
        }
    }
}
