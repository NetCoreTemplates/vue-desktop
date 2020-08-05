using System;
using ServiceStack;
using ServiceStack.DataAnnotations;

namespace MyApp.ServiceModel
{
    [Route("/forecasts")]
    [Route("/forecasts/{Id}")]
    public class QueryWeatherForecasts : QueryDb<WeatherForecast>
    {
        public int? Id { get; set; }
        public DateTime? BeforeDate { get; set; }
        public DateTime? AfterDate { get; set; }
        public int? BelowTemperatureC { get; set; }
        public int? AboveTemperatureC { get; set; }
    }
    
    public class WeatherForecast
    {
        [AutoIncrement]
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int TemperatureC { get; set; }
        public string Summary { get; set; }
        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
    }
}