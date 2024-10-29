# Project Management System

Este repositório contém uma aplicação para cadastro e gerenciamento , que implementa uma arquitetura limpa, dividindo responsabilidades entre front-end e back-end, com centralização de APIs pelo **Krakend**. A aplicação permite gerenciar diferentes perfis de usuários (admin, gerente e operador) e simula autenticação com **NextAuth** e **Keycloak**.

## 📋 Funcionalidades

- **Cadastro e listagem de projetos** com status e informações detalhadas.
- **Autenticação** com Keycloak via NextAuth.
- **Gestão de Perfis de Usuários**: cada usuário possui permissões específicas para ações na plataforma (admin, gerente e operador).
- **Centralização de APIs**: todas as chamadas de API são gerenciadas via Krakend, integrando Django e FastAPI.
- **Feedback de Carregamento** para interações importantes, como login.

## 🛠 Tecnologias e Ferramentas

### Front-end

- **[Next.js 14](https://nextjs.org/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[SWR](https://swr.vercel.app/)**
- **[NextAuth](https://next-auth.js.org/)** para autenticação com Keycloak
- **[Axios](https://axios-http.com/)** para chamadas HTTP

### Back-end

- **[Django](https://www.djangoproject.com/)** para o gerenciamento de projetos
- **[FastAPI](https://fastapi.tiangolo.com/)** para serviços de autenticação
- **[Krakend](https://www.krakend.io/)** como API Gateway

## 📂 Estrutura do Projeto

/src /components # Componentes reutilizáveis /hooks # Hooks customizados /pages # Páginas da aplicação /services # Camada de consumo de API /api # Serviços Axios com SWR /store # Estado global /types # Definições de interfaces e tipos /utils # Funções auxiliares e utilidades

## 🚀 Configuração e Execução

### Pré-requisitos

- **Node.js** e **yarn** instalados
- **Docker** e **Docker Compose**

### 1. Clone o Repositório

```bash


Acesse a aplicação em http://localhost:3000.

📄 Uso e Navegação
Acesse a interface de autenticação para realizar o login.
Navegue até a página de Projetos para visualizar, adicionar e gerenciar os projetos.
O perfil do usuário define as permissões para edição e visualização.
📚 Referências
Krakend Documentation
Next.js Documentation
Keycloak Documentation
