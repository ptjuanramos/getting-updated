using AspectCore.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using NetAndMinAPI;
using POC.AuditWithAOP;
using System;

WebApplicationBuilder hostBuilder = WebApplication.CreateBuilder(args);
hostBuilder.Host.UseServiceProviderFactory(new DynamicProxyServiceProviderFactory());

hostBuilder.Services.AddControllers();
hostBuilder.Services.AddTransient<IUserService, UserService>();
hostBuilder.Services.AddAuditInterceptor();

await using WebApplication application = hostBuilder.Build();

const string WeatherEndpoint = "/weather";

application.MapGet(WeatherEndpoint, (Func<JsonResult>)(() => new JsonResult(new WeatherForecast())));
application.MapPost(WeatherEndpoint, (Func<JsonResult>)(() => new JsonResult(new WeatherForecast())));
application.MapPut(WeatherEndpoint, (Func<JsonResult>)(() => new JsonResult(new WeatherForecast())));
application.MapDelete(WeatherEndpoint, (Func<JsonResult>)(() => new JsonResult(new WeatherForecast())));

application.MapControllers();

await application.RunAsync();
