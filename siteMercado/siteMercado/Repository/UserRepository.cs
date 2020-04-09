using siteMercado.Models;
using siteMercado.Repository.Interfaces;
using System;
using System.Linq;

namespace siteMercado.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly dbSiteMercadoContext _context;

        public UserRepository(dbSiteMercadoContext context)
        {
            _context = context;
        }


        public Usuario GetByLogin(string login)
        {
            try
            {
                return _context.Usuario
                    .SingleOrDefault(p => p.Email.Equals(login));
            }
            catch (Exception e)
            {

                throw e;
            }
            
        }
    }
}
