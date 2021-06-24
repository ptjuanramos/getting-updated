﻿using Microsoft.Extensions.DependencyInjection;
using SampleWebLogProvider.DataAccess.Concrete;

namespace SampleWebLogProvider.DataAccess
{
    public static class ServiceCollectionExtensions
    {
        public static void AddLogRepository(this IServiceCollection services)
        {
            services.AddTransient<ILogRepository, LogRepository>();
        }
    }
}
