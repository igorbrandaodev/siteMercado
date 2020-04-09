using siteMercado.Security;
using siteMercado.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using siteMercado.Services.Interfaces;

namespace ApiLaurentiz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IUserService _service;

        public LoginController(IUserService service)
        {
            _service = service;
        }

        [AllowAnonymous]
        [HttpPost]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public object Post([FromBody]AccessCredentials credentials)
        {
            if (credentials == null) return BadRequest();
            return _service.GetByLogin(credentials);
        }
    }
}