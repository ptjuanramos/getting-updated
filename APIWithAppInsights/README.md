

# [Application insights telemetry](https://docs.microsoft.com/en-us/azure/azure-monitor/app/ilogger)

## 1. Nuget package

[![NuGet](https://img.shields.io/nuget/v/Microsoft.ApplicationInsights.AspNetCore.svg)](https://www.nuget.org/packages/Microsoft.ApplicationInsights.AspNetCore)

## 2. Startup configuration

```CSHARP
public void ConfigureServices(IServiceCollection services) 
{
    ...
    services.AddApplicationInsightsTelemetry();
    ...
}
```

## 3. Configure appSettings.json

Configuring error log level as minimum log level to be capture by application insights.

```JSON
{
  ...
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    },
    "ApplicationInsights": {
      "LogLevel": {
        "Default": "Error"
      }
    }
  }
  ...
}
```