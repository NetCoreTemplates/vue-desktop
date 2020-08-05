using System;
using Funq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyApp.ServiceInterface;
using MyApp.ServiceModel;
using ServiceStack;
using ServiceStack.Configuration;
using ServiceStack.Data;
using ServiceStack.Desktop;
using ServiceStack.OrmLite;

namespace MyApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) { }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseServiceStack(new AppHost {
                AppSettings = new NetCoreAppSettings(Configuration),
            });
        }
    }

    public class AppHost : AppHostBase
    {
        public AppHost()
            : base("My App", typeof(MyServices).Assembly) { }

        public override void Configure(Container container)
        {
            SetConfig(new HostConfig {
                DebugMode = AppSettings.Get(nameof(HostConfig.DebugMode), HostingEnvironment.IsDevelopment()),
            });

            if (Config.DebugMode)
            {
                Plugins.Add(new HotReloadFeature {
                    VirtualFiles = VirtualFiles, //Monitor all folders for changes including /src & /wwwroot
                });
            }

            container.Register<IDbConnectionFactory>(c => 
                new OrmLiteConnectionFactory(":memory:", SqliteDialect.Provider));

            SeedData(container.Resolve<IDbConnectionFactory>());
            
            Plugins.Add(new AutoQueryFeature {
                MaxLimit = 1000
            });

            Plugins.Add(new SharpPagesFeature {
                EnableSpaFallback = true,
                ScriptMethods = {
                    new DbScriptsAsync(),
                    new CustomMethods(),
                },
            });

            Plugins.Add(new DesktopFeature {
                AppName = "my-app",
                AccessRole = RoleNames.AllowAnon,
            });
        }

        private void SeedData(IDbConnectionFactory dbFactory)
        {
            using var db = dbFactory.Open();
            if (db.CreateTableIfNotExists<WeatherForecast>())
            {
                db.Insert(new WeatherForecast {
                    Date = new DateTime(2018, 05, 06),
                    TemperatureC = 1,
                    Summary = "Freezing"
                }, new WeatherForecast {
                    Date = new DateTime(2018, 05, 07),
                    TemperatureC = 14,
                    Summary = "Bracing"
                }, new WeatherForecast {
                    Date = new DateTime(2018, 05, 08),
                    TemperatureC = -13,
                    Summary = "Freezing"
                }, new WeatherForecast {
                    Date = new DateTime(2018, 05, 09),
                    TemperatureC = -16,
                    Summary = "Balmy"
                }, new WeatherForecast {
                    Date = new DateTime(2018, 05, 10),
                    TemperatureC = -2,
                    Summary = "Chilly"
                });
            }
        }
    }
}