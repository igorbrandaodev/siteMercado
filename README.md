# siteMercado
Teste prático em processo seletivo da Site Mercado. Aplicação básica de CRUD com SPA e WEB API.

Funcionalidades:

• Controle de acesso: Autenticação com JWT.
• CRUD de Produtos.

Tecnologias utilizadas:

• Front-End: Angular 9.1.1
• Back-End: .Net Core 2.2.0
• ORM: Entity Framework Core
• Banco de dados: MSSQL Server(Express)


Instruções para execução:

1. Utilizar IDE Visual Studio e SGBD SqlServer Management Studio.
2. Execute o script de criação da base de dados (script localizado em "siteMercado/Utils/script.sql").
3. Altere a string de conexão da base de dados em "siteMercado/appsettings.json".
4. Altere a url da api no arquivo "siteMercado/ClientApp/src/environments/environment.ts".
5. Execute os seguintes comandos em sequência no diretório "siteMercado/ClientApp":
	a. "npm install" ;
	b. "ng build".
6. Execute a aplicação e realize login com as seguintes credencias:
	a. Usuário: igorbrandao00@gmail.com
	b. Senha: 123456

