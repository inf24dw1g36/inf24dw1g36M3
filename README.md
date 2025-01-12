# Trabalho Prático - Desenvolvimento Web I (2024/25)

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
- Criação de uma collection postman.
- Desenvolver a aplicação em ambiente Docker.

### Estrutura do Projeto

api-hotel-m3/
   - `sql/`: Contém os ficheiro .sql quer foram usado na criação da base de dados.
   - `src/`: Contém o código essencial gerado pelo loopback4.
      - `controller/`: Contém os controladores dos modelos criados.
      - `datasource/`: Responsavel pela conecção a base de dados.
      - `repositories/`: Contém a configuração para os containers Docker.
      - `models/`: Contém a informação sobre cada modelo criado.
      - `compose.yaml`: Ficheiro responsavel pela criação do docker compose
      - `postman`: Coleção de requisições para testes da API no Postman.
   - `README.md`: Este arquivo, que contém as informações sobre o projeto.
     
frontend/react_app
   - `src/`: Contem codigo essencial para o gerado create-react-app
      -  `app.js`: Informações essenciais da pagina html 
      -  `hotels.js`: Gestor informações dos hoteis. 
      -  `quartos.js`: Gestor informações dos quartos.
      -  `hospedes.js`: Gestor informações dos hospedes.
      -  `reservas.js`: Gestor informações das reservas.

## Requisitos

### Backend

- Loopback4 para criação da API.
- MySQL como banco de dados.

### Frontend

- React-Admin para o desenvolvimento do cliente web de backoffice.

### Docker

- Docker Engine para contentorização da aplicação.

## Como Rodar o Projeto

### Pré-requisitos

- **Docker** instalado.

### Passo a Passo

1. **Clonar o repositório**:

   ```bash
   git clone https://github.com/inf24dw1g36/inf24dw1g36m3
   cd inf24dw1g36/api-hotel-m3/
   docker-compose up -d
   ```
   browerser: http://localhost:8080
