## Code Challenge - Mural de mensagens

## Requisitos Funcionais

- [] O Usuário precisa se cadastrar apenas usando o e-mail
- [] O usuário precisa poder postar uma mensagem no mural
- [] O usuário precisa poder autenticar via e-mail
- [](opcional) A mensagem pode ser deletada

## Requisitos não-funcionais

- Nest.js
- GraphQl
- TypeORM
- React + Apollo Client (ou outra library)

## Regras de negócio

- [] O usuário não pode deletar mensagens de outro usuário

## Dependências

- yarn add dataloader graphql graphql-tools type-graphql typeorm graphql apollo-server-express voyager @types/graphql @nestjs/graphql sqlite3 @nestjs/typeorm
- yarn add type-graphql graphql dataloader @nestjs/graphql apollo-server-express
- yarn add --dev @types/graphql

## Comandos aplicação

- yarn typeorm migration:create -n create-users --config src/config/orm.ts
- yarn typeorm migration:create -n create-messages --config src/config/orm.ts
- yarn typeorm migration:run

-1:32
