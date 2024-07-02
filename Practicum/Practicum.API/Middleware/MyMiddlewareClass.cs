namespace Practicum.API.Middleware
{
    public class MyMiddlewareClass:IMiddleware
    {
        //private readonly RequestDelegate _next;
        //public MyMiddlewareClass(RequestDelegate next)
        //{
        //        _next = next;   
        //}
        //public async Task InVokeAsync(HttpContext context)
        //{
        //    Console.WriteLine("middleware start");
        //    var shabbat = true;
        //    if (shabbat)
        //    {
        //        context.Response.StatusCode = StatusCodes.Status400BadRequest;
        //        return;
        //    }
        //    await _next(context);
        //    Console.WriteLine("middleware end");
        //}ד
        private readonly RequestDelegate _next;
        private readonly ILogger<MyMiddlewareClass> _logger;

        public MyMiddlewareClass(RequestDelegate next, ILogger<MyMiddlewareClass> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            // קבלת מידע על הבקשה
            var user = context.User.Identity.Name;
            var timestamp = DateTime.UtcNow;
            var path = context.Request.Path;
            var method = context.Request.Method;

            // רישום נתוני הבקשה
            _logger.LogInformation($"{user} - {timestamp} - {path} - {method}");

            await _next(context);
        }
    }
}
