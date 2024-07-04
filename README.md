## Descrição

Este projeto MVC é uma aplicação NestJS que implementa autenticação e gerenciamento de usuários, seguindo os princípios de SOLID e Domain-Driven Design (DDD).

## Configuração

1. Clone o repositório:

   ```bash
   git clone <repo-url>
   cd <repo-name>
   ```

2. Instale as dependências:

   ```bash
   yarn
   ```

3. Configure o MongoDB:
   Certifique-se de que as envs estão devidamente declaradas, use o arquivo env.exemple de referência

4. Inicie o servidor:

   ```bash
   yarn start
   ```

5. Acesse o projeto em `http://localhost:3000`.

## Endpoints
- POST /api/auth/register - Registra um novo usuário.
- POST /api/auth/login - Autentica um usuário.
- POST /api/auth/recover - Envia um email para recuperação de senha.
- POST /api/auth/reset-password - Reseta a senha do usuário.
- GET /api/users - Lista todos os usuários cadastrados.
- POST /api/users - Cria um novo usuário.

## Rotas do Frontend
- /login - Realiza o login de um usuário e redireciona para a página de perfil se o login for bem-sucedido.
- /register - Registra um novo usuário e redireciona para a página de login após o registro bem-sucedido.
- /recover - Envia um email de recuperação de senha para o usuário.
- /reset-password - Reseta a senha do usuário com base no token enviado por email.