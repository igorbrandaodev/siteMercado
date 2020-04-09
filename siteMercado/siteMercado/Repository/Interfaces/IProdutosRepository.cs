using siteMercado.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace siteMercado.Repository.Interfaces
{
    public interface IProdutosRepository
    {
        Task<IEnumerable<Produto>> GetAllAsync();
        Task<Produto> GetById(int id);
        Task<Produto> Create(Produto ponto);
        Task<Produto> Update(Produto produto);
        void Delete(Produto produto);
    }
}
