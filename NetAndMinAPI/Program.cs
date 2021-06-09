using AspectCore.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using POC.AuditWithAOP;

WebApplicationBuilder hostBuilder = WebApplication.CreateBuilder(args);
hostBuilder.Host.UseServiceProviderFactory(new DynamicProxyServiceProviderFactory());

hostBuilder.Services.AddControllers();
hostBuilder.Services.AddTransient<IUserService, UserService>();
hostBuilder.Services.AddAuditInterceptor();

await using WebApplication application = hostBuilder.Build();

application.MapControllers();

await application.RunAsync();
