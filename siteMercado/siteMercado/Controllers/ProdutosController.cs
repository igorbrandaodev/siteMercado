using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using siteMercado.Models;
using siteMercado.Services.Interfaces;

namespace siteMercado.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : ControllerBase
    {
        private IProdutosService _produtosService;

        public ProdutosController(dbSiteMercadoContext context, IProdutosService produtosService)
        {
            _produtosService = produtosService;
        }

        // GET: api/Produtos
        [HttpGet]
        [Authorize("Bearer")]
        public async Task<ActionResult<IEnumerable<Produto>>> GetAllAsync()
        {
            try
            {
                return Ok(await _produtosService.GetAllAsync());
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        // GET: api/Produtos/5
        [HttpGet("{id}")]
        [Authorize("Bearer")]
        public async Task<ActionResult<Produto>> GetById(int id)
        {
            var produto = await _produtosService.GetById(id);

            if (produto == null)
            {
                return NotFound();
            }

            return produto;
        }


        // POST: api/Produtos/5
        [HttpPost("{id}"), DisableRequestSizeLimit]
        [Authorize("Bearer")]
        public async Task<IActionResult> Update([FromRoute]int id, [FromForm]Produto produto)
        {
            try
            {
                IFormFile file = null;

                // Obtém o arquivo
                if (Request.Form.Files.Count > 0)
                {
                    file = Request.Form.Files[0];
                }

                // Chama o serviço
                await _produtosService.Update(file, produto);

            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }

            return Ok();
        }

        // POST: api/Produtos
        [HttpPost, DisableRequestSizeLimit]
        public async Task<ActionResult<Produto>> Create([FromForm]Produto produto)
        {
            // Salva a imagem do produto
            try
            {
                IFormFile file = null;

                // Obtém o arquivo
                if (Request.Form.Files.Count > 0)
                {
                    file = Request.Form.Files[0];
                }

                // Chama o serviço
                await _produtosService.Create(file, produto);

            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }

            return Ok();
        }




        // DELETE: api/Produtos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Produto>> Delete(int id)
        {
            // Verifica se o produto existe
            var produto = await _produtosService.GetById(id);
            if (produto == null)
            {
                return NotFound();
            }

            // Chama o serviço
            _produtosService.Delete(produto);

            return Ok();
        }
    }
}
