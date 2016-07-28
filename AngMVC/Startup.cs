using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngMVC.Startup))]
namespace AngMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
