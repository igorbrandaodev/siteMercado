using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace siteMercado.Models
{
    public partial class dbSiteMercadoContext : DbContext
    {
        public dbSiteMercadoContext()
        {
        }

        public dbSiteMercadoContext(DbContextOptions<dbSiteMercadoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Produto> Produto { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-O5O7OE7; Database=dbSiteMercado;Trusted_Connection=False;Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");

            modelBuilder.Entity<Produto>(entity =>
            {
                entity.ToTable("produto");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.DataAtualizacao)
                    .HasColumnName("dataAtualizacao")
                    .HasColumnType("datetime");

                entity.Property(e => e.DataCadastro)
                    .HasColumnName("dataCadastro")
                    .HasColumnType("datetime");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasColumnName("descricao")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.Estoque).HasColumnName("estoque");

                entity.Property(e => e.Imagem)
                    .HasColumnName("imagem")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Preco)
                    .HasColumnName("preco")
                    .HasColumnType("decimal(10, 2)");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.ToTable("usuario");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .HasColumnName("nome")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .HasColumnName("senha")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
