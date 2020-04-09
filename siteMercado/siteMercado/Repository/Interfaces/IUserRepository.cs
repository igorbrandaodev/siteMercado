using siteMercado.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace siteMercado.Repository.Interfaces
{
    public interface IUserRepository
    {
        Usuario GetByLogin(string login);
    }
}
