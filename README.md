<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

# Short'n'sweet - URL shortener para equipes de desenvolvimento

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

Short'n'sweet é um URL shortener pensado para equipes de desenvolvimento que necessitem de ter acesso facilitado a links minificados, sem se submeter às tarifas impostas pelos sites comerciais. 

Outra motivação, é dar mais liberdade ao desenvolvedor para utilizar endereços que saiam dos protocolos standard para URLs, como didcomm, e gerar links http para estes protocolos, especialmente para testes de comunicação com NFC. 

A motivaçao final é aceitar URLs com tamanho que passe o aceito pela média dos shorteners comerciais (possivelmente 256 caracteres). Nós permitiremos URLs que tenham até 2Kb de tamanho, fazendo que assim tenhamos endereços encurtados para protocolos de comunicação especiais, próprios para o desenvolvimento. 

## Shortening
<div align="center">
  <img src="assets/images/shortening.png" />
</div>

## Redirecting
<div align="center">
  <img src="assets/images/redirection.png" />
</div>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Julio Torres](https://kryptogarten.ca)
- Website - [https://nestjs.com](https://www.shortnsweet.link/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

