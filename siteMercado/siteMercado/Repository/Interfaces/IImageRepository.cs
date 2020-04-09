using Microsoft.AspNetCore.Http;

namespace siteMercado.Repository.Interfaces
{
    public interface IImageRepository
    {
        string SalvaImagem(IFormFile imagem);
        string ObtemImagem(string caminho);
        bool ExisteImagem(string caminho);
        void ExcluiImagem(string caminho);
    }
}
