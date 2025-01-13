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

### Endpoints

| **Path**                           | **Método** | **Descrição**                                  |
|-------------------------------------|------------|------------------------------------------------|
| `/hotels`                           | GET        | Obtém uma lista de hotéis.                     |
| `/hotels`                           | POST       | Cria um novo hotel.                            |
| `/hotels`                           | PATCH       | Modifica parcialmente os dados de todos os hoteis. |
| `/hotels/count`                     | GET        | Conta o número de hotéis.                     |
| `/hotels/{id}`                      | GET        | Obtém os detalhes de um hotel específico.      |
| `/hotels/{id}`                      | PUT        | Atualiza os dados de um hotel específico.      |
| `/hotels/{id}`                      | PATCH      | Modifica parcialmente os dados de um hotel.    |
| `/hotels/{id}`                      | DELETE     | Deleta um hotel específico.                   |
| `/hotels/{id}/quartos`              | GET        | Obtém a lista de quartos de um hotel.          |
| `/hotels/{id}/quartos`              | POST       | Cria um novo quarto para um hotel.             |
| `/hotels/{id}/quartos`              | PATCH      | Modifica parcialmente os dados de um quarto.   |
| `/hotels/{id}/quartos`              | DELETE     | Deleta um quarto de um hotel.                 |
| `/hospedes`                         | GET        | Obtém a lista de hóspedes.                     |
| `/hospedes`                         | POST       | Cria um novo hóspede.                          |
| `/hospedes`                         | PATCH       | Modifica parcialmente os dados de todos os hóspede. |
| `/hospedes/count`                   | GET        | Conta o número de hóspedes.                   |
| `/hospedes/{id}`                    | GET        | Obtém os detalhes de um hóspede específico.    |
| `/hospedes/{id}`                    | PUT        | Atualiza os dados de um hóspede específico.    |
| `/hospedes/{id}`                    | PATCH      | Modifica parcialmente os dados de um hóspede.  |
| `/hospedes/{id}`                    | DELETE     | Deleta um hóspede específico.                 |
| `/hospedes/{id}/reservas`           | GET        | Obtém a lista de reservas de um hóspede.       |
| `/hospedes/{id}/reservas`           | POST       | Cria uma nova reserva para um hóspede.         |
| `/hospedes/{id}/reservas`           | PATCH      | Modifica parcialmente uma reserva de hóspede.  |
| `/hospedes/{id}/reservas`           | DELETE     | Deleta uma reserva de hóspede.                |
| `/quartos`                          | GET        | Obtém a lista de quartos.                      |
| `/quartos`                          | POST       | Cria um novo quarto.                          |
| `/quartos`                          | PATCH       | Modifica parcialmente os dados de todos os quartos. |
| `/quartos/count`                    | GET        | Conta o número de quartos.                    |
| `/quartos/{id}`                     | GET        | Obtém os detalhes de um quarto específico.     |
| `/quartos/{id}`                     | PUT        | Atualiza os dados de um quarto específico.     |
| `/quartos/{id}`                     | PATCH      | Modifica parcialmente os dados de um quarto.   |
| `/quartos/{id}`                     | DELETE     | Deleta um quarto específico.                  |
| `/quartos/{id}/reservas`            | GET        | Obtém a lista de reservas de um quarto.        |
| `/quartos/{id}/reservas`            | POST       | Cria uma nova reserva para um quarto.          |
| `/quartos/{id}/reservas`            | PATCH      | Modifica parcialmente uma reserva de quarto.   |
| `/quartos/{id}/reservas`            | DELETE     | Deleta uma reserva de quarto.                 |
| `/quartos/{id}/hotel`               | GET        | Obtém o hotel ao qual um quarto pertence.      |
| `/reservas`                         | GET        | Obtém a lista de reservas.                     |
| `/reservas`                         | POST       | Cria uma nova reserva.                        |
| `/reservas`                         | PATCH       | Modifica parcialmente os dados de todas as reserva. |
| `/reservas/count`                   | GET        | Conta o número de reservas.                   |
| `/reservas/{id}`                    | GET        | Obtém os detalhes de uma reserva específica.   |
| `/reservas/{id}`                    | PUT        | Atualiza os dados de uma reserva específica.   |
| `/reservas/{id}`                    | PATCH      | Modifica parcialmente os dados de uma reserva. |
| `/reservas/{id}`                    | DELETE     | Deleta uma reserva específica.                |
| `/reservas/{id}/hospede`            | GET        | Obtém o hóspede relacionado a uma reserva.     |
| `/reservas/{id}/quarto`             | GET        | Obtém o quarto relacionado a uma reserva.      |

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
- Garantir que nenhum serviço esta a utilizar as portas 8080, 3000 e 3306.
- Garantir que o docker engine esteja executando.

### Passo a Passo

Em um repositorio de sua escolha abra o terminal e digite os seguintes comandos

```bash
git clone https://github.com/inf24dw1g36/inf24dw1g36M3.git
cd inf24dw1g36/api-hotel-m3
docker-compose up -d
```

os recursos ja estão disponiveis nos endpoints a baixo

browerser:
   - react-admin: http://localhost:8080

   - loopback4: http://127.0.0.1:3000/explorer/
