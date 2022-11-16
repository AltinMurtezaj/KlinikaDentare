namespace API.Middleware
{
    internal class AppExceptions
    {
        private int statusCode;
        private string message;
        private string v;

        public AppExceptions(int statusCode, string message, string v)
        {
            this.statusCode = statusCode;
            this.message = message;
            this.v = v;
        }
    }
}