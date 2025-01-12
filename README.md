# Trabalho Prático - Desenvolvimento Web I (2º Semestre 2024/25)

## Descrição do Projeto

Este projeto tem como objetivo o desenvolvimento de uma aplicação web com base em uma arquitetura REST, utilizando a framework Loopback4 para a criação de uma API e a biblioteca React-Admin para o desenvolvimento de um cliente web de backoffice. O projeto foi desenvolvido como parte da disciplina de **Desenvolvimento Web I** da **Universidade da Maia**.

### Funcionalidades

- **API REST** com 4 verbos HTTP (CRUD) implementados.
- **4 recursos diferentes** disponibilizados pela API.
- Implementação de **relação de cardinalidade 1:n** entre dois recursos.
- Representação dos recursos em formato **JSON**.
- **Documentação OpenAPI 3.0** da API.
- **Coleção Postman** disponível para testes da API.
- **MySQL** como sistema de gerenciamento de banco de dados.
- **Docker** para contentorização da aplicação (com pelo menos 2 containers).
- **Aplicação de backoffice** desenvolvida com React-Admin.

## Objetivos

- Criar uma API RESTful utilizando Loopback4.
- Construir uma aplicação de backoffice para administração dos dados.
- Integrar a API com o banco de dados MySQL.
- Documentar a API com OpenAPI 3.0.
- Desenvolver a aplicação em ambiente Docker.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **Backend (API)**: Utiliza a framework Loopback4 para desenvolvimento da API RESTful.
- **Frontend (Backoffice)**: Construído utilizando a biblioteca React-Admin.
- **Banco de Dados**: MySQL.
- **Docker**: Utilizado para a criação de containers para a aplicação.

### Arquivos e Pastas

- `backend/`: Contém o código da API desenvolvida com Loopback4.
- `frontend/`: Contém o código da aplicação de backoffice desenvolvida com React-Admin.
- `docker/`: Contém a configuração para os containers Docker.
- `docs/`: Documentação da API em formato OpenAPI 3.0 e outros materiais relevantes.
- `postman/`: Coleção de requisições para testes da API no Postman.
- `README.md`: Este arquivo, que contém as informações sobre o projeto.

## Requisitos

### Backend

- Loopback4 para criação da API.
- MySQL como banco de dados.
- Documentação OpenAPI 3.0.

### Frontend

- React-Admin para o desenvolvimento do cliente web de backoffice.

### Docker

- Docker Engine para contentorização da aplicação (pelo menos dois containers).

## Como Rodar o Projeto

### Pré-requisitos

- **Docker** instalado.
- **Node.js** e **npm** instalados (necessário para desenvolvimento local da API e do cliente).

### Passo a Passo

1. **Clonar o repositório**:

   ```bash
   git clone https://github.com/[nome_da_organização]/inf24dw1gXX
   cd inf24dw1gXX
