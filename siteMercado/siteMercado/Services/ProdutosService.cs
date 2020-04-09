using Microsoft.AspNetCore.Http;
using siteMercado.Models;
using siteMercado.Repository.Interfaces;
using siteMercado.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace siteMercado.Services
{
    public class ProdutosService : IProdutosService
    {
        private readonly IProdutosRepository _produtosRepository;
        private readonly IImageRepository _imageRepository;
        public ProdutosService(IProdutosRepository produtosRepository, IImageRepository imageRepository)
        {
            _produtosRepository = produtosRepository;
            _imageRepository = imageRepository;
        }

        public async Task<IEnumerable<Produto>> GetAllAsync()
        {
            // Obtem a lista de produtos
            var produtos = await _produtosRepository.GetAllAsync();

            // Para cada produto
            foreach (var produto in produtos)
            {
                // Troca o caminho da imagem pela mesma em base64
                if (produto.Imagem != null)
                {
                    produto.Imagem = _imageRepository.ObtemImagem(produto.Imagem);
                }
            }

            return produtos;

        }

        public async Task<Produto> GetById(int id)
        {
            return await _produtosRepository.GetById(id);
        }

        public async Task<Produto> Create(IFormFile imagem, Produto produto)
        {
            // Salva a imagem e salva o caminho
            if (imagem != null)
            {
                produto.Imagem = _imageRepository.SalvaImagem(imagem);
            }

            // Salva o produto
            return await _produtosRepository.Create(produto);
        }
        public async Task<Produto> Update(IFormFile imagem, Produto produto)
        {
            // Salva a imagem e salva o caminho
            if (imagem != null)
            {
                produto.Imagem = _imageRepository.SalvaImagem(imagem);
            }

            // Salva o produto
            return await _produtosRepository.Update(produto);
        }

        public void Delete(Produto produto)
        {
            // Exclui a imagem, se houver
            if (produto.Imagem != null)
            {
                _imageRepository.ExcluiImagem(produto.Imagem);
            }

            // Exclui os dados do banco
            _produtosRepository.Delete(produto);
        }



    }
}
