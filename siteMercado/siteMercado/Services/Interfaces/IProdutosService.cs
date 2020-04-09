using Microsoft.AspNetCore.Http;
using siteMercado.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace siteMercado.Services.Interfaces
{
    public interface IProdutosService
    {
        Task<IEnumerable<Produto>> GetAllAsync();
        Task<Produto> GetById(int id);
        Task<Produto> Create(IFormFile imagem, Produto ponto);
        Task<Produto> Update(IFormFile imagem, Produto ponto);
        void Delete(Produto produto);
    }
}
