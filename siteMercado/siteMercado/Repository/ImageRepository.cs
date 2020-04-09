using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Net.Http.Headers;

namespace siteMercado.Repository.Interfaces
{
    public class ImageRepository : IImageRepository
    {
        public string SalvaImagem(IFormFile imagem)
        {
            // Monta o caminho da pasta
            var folderName = Path.Combine("Resources", "Images");
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

            // Ajusta o nome do  arquivo
            var fileName = ContentDispositionHeaderValue.Parse(imagem.ContentDisposition).FileName.Trim('"');

            // Caminho para salvar
            var fullPath = Path.Combine(pathToSave, fileName);

            // Caminho para armazenar no banco
            var dbPath = Path.Combine(folderName, fileName);

            // Se já existe a imagem, retorna só o caminho
            if (!ExisteImagem(fullPath))
            {
                // Salva o arquivo
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    imagem.CopyTo(stream);
                }
            }

            // Retorna o caminho no banco
            return dbPath;

        }


        public string ObtemImagem(string caminho)
        {
            // Monta o caminho completo
            var fullPath = Path.Combine(Directory.GetCurrentDirectory(), caminho);

            // Busca a imagem
            if (ExisteImagem(fullPath))
            {
                var bytes = System.IO.File.ReadAllBytes(fullPath);
                String base64 = Convert.ToBase64String(bytes);

                return "data:image/jpg;base64," + base64;
            }
            else
            {
                return null;
            }
        }

        public bool ExisteImagem(string caminho)
        {
            // Busca a imagem
            if (System.IO.File.Exists(caminho))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public void ExcluiImagem(string caminho)
        {
            // Monta o caminho completo
            var fullPath = Path.Combine(Directory.GetCurrentDirectory(), caminho);

            // Busca a imagem
            if (ExisteImagem(fullPath))
            {
                // Exclui
                System.IO.File.Delete(fullPath);
            }
        }



    }
}
