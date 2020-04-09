using Microsoft.EntityFrameworkCore;
using siteMercado.Models;
using siteMercado.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace siteMercado.Repository
{
    public class ProdutosRepository : IProdutosRepository
    {
        private readonly dbSiteMercadoContext _context;

        public ProdutosRepository(dbSiteMercadoContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Produto>> GetAllAsync()
        {
            try
            {
                return await _context.Produto.ToListAsync();
            }
            catch (Exception)
            {

                throw;
            }

        }

        public async Task<Produto> GetById(int id)
        {
            try
            {
                return await _context.Produto.FindAsync(id);
            }
            catch (Exception)
            {

                throw;
            }

        }

        public async Task<Produto> Create(Produto produto)
        {
            try
            {
                _context.Produto.Add(produto);
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {

                throw;
            }

            return produto;
        }

        public async Task<Produto> Update(Produto produto)
        {
            // Se já tiver imagem em base64, salva o caminho
            if (produto.Imagem != null && produto.Imagem.Contains("base64"))
            {
                Produto old = await GetById(produto.Id);
                produto.Imagem = old.Imagem;
                _context.Entry(old).State = EntityState.Detached;
            }

            try
            {
                _context.Entry(produto).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {

                throw;
            }

            return produto;
        }

        public void Delete(Produto produto)
        {
            try
            {
                _context.Produto.Remove(produto);
                _context.SaveChangesAsync();
            }
            catch (Exception)
            {

                throw;
            }
        }



    }
}
