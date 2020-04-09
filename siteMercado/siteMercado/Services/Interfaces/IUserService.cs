using siteMercado.Security;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace siteMercado.Services.Interfaces
{
    public interface IUserService
    {
        object GetByLogin(AccessCredentials credentials);
        object SuccessObject(DateTime createDate, DateTime expirationDate, string token, AccessCredentials credentials, TimeSpan finalExpiration);
        string CreateToken(ClaimsIdentity identity, DateTime createDate, DateTime expirationDate, JwtSecurityTokenHandler handler);
        object ExceptionObject();
    }
}
