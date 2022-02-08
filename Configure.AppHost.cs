using Funq;
using ServiceStack;
using ServiceStack.Data;
using ServiceStack.Desktop;
using ServiceStack.OrmLite;
using ServiceStack.Configuration;
using MyApp.ServiceInterface;
using MyApp.ServiceModel;

[assembly: HostingStartup(typeof(MyApp.AppHost))]

namespace MyApp;

public class AppHost : AppHostBase, IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services => {
            // Configure ASP.NET Core IOC Dependencies
        });

    public AppHost() : base("MyApp", typeof(MyServices).Assembly) {}

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
