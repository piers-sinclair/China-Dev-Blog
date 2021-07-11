using china_dev_blog.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Web;

namespace china_dev_blog.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly ILogger<UserProfileController> _logger;

        public UserProfileController(ILogger<UserProfileController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<string>> GetUserProfile()
        {
            _logger.LogInformation("Starting GetUserProfile");

            string description = @"Piers is a Senior Software Architect with more than 6 years experiences in databases and software development with a variety of technologies. He is especially proficient in .Net using Azure and SQL with a multitude of front end technologies.";

            var userProfile = new UserProfile
            {
                FirstName = "Piers",
                Surname = "Sinclair",
                JobTitle = "Senior Software Architect",
                Description = description
            };

            string json = JsonConvert.SerializeObject(userProfile);

            _logger.LogInformation("Ending GetUserProfile");

            return json;
        }
    }
}