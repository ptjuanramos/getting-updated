using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using NetAndAPI;

WebApplicationBuilder hostBuilder = WebApplication.CreateBuilder(args);
hostBuilder.Services.AddControllers();
hostBuilder.Services.AddCustomService();

WebApplication application = hostBuilder.Build();

application.MapControllers();

await application.RunAsync();