<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Short'n'Sweet - URL shortener para equipes de desenvolvimento

## Description

Short'n'Sweet é um URL shortener pensado para equipes de desenvolvimento que necessitem de ter acesso facilitado a links minificados, sem se submeter às tarifas impostas pelos sites comerciais. 

Outra motivação, é dar mais liberdade ao desenvolvedor para utilizar endereços que saiam dos protocolos standard para URLs, como `didcomm://`, e gerar links http para estes protocolos, especialmente para testes de comunicação com NFC. 

A motivaçao final é aceitar URLs com tamanho que passe do aceito pela média dos shorteners comerciais (possivelmente 256 caracteres). Nós permitiremos URLs que tenham até 2Kb de tamanho, fazendo que assim tenhamos endereços encurtados para protocolos de comunicação especiais, próprios para o desenvolvimento. 



## Minificando
<div align="center">
  <img src="assets/images/shortening.png" />
</div>

## Redirecionando
<div align="center">
  <img src="assets/images/redirection.png" />
</div>

## Instalação

Inicialmente, a instalação do dos pacotes nodejs é feita com o `npm`:  
```bash
$ npm install
```

Em seguida, para o deploy da aplicação, é necessário criar um arquivo `.env` na raiz da aplicação, e informar o conteúdo abaixo: 

```bash
# Variables d'environnement
APP=shortnsweet
SUFFIX=dev
NETWORK=shortnsweet-network
MODE=DEV
SECRET=    # *** Informe um valor para o segredo
POSTGRES_HOST=db
POSTGRES_NAME=url-courte
POSTGRES_USER=postgres
POSTGRES_PASSWORD=    # *** Informe um valor para a senha
POSTGRES_ADMIN_PASSWORD=    # *** Informe um valor para a senha
# TypeORM 
# Dans les environnements de developpement et d'acceptation, setter à true 
# IMPORTANT: POUR L'ENVIRONNEMENT DE PROD, SETTER À false!!!!! Sinon on risque la perte de données à la prod. 
SYNCHRONIZE=true

```

## Executando a aplicação

### Executando local em modo dev

Para a execução do projeto localmente em modo de desenvolvimento, execute os comandos abaixo: 

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Executando container docker 

O caso de utilização mais comum, no entanto, será via container `docker`. Para executar o projeto containerizado, seguir os comandos abaixo, na raiz do projeto. 

```bash
# Faça a criaçao da imagem que sera utilizada 
$ docker build . <usuario>/<nome_imagem>:<versao> # por exemplo, juliozohar/shortnsweet:1.0

# Publique a imagem no Docker Hub (é necessario estar conectado à sua conta docker hub)
docker push <usuario>/<nome_imagem>:<versao> # por exemplo, juliozohar/shortnsweet:1.0

# Em seguida, lance a aplicação, em modo detached. 
$ docker-compose up -d &

```

A aplicaçao sera executada na porta que esta configurada no arquivo docker-compose.yaml, parâmetro `ports:`. A primeira porta é a externa, pela qual a aplicaçao responde as requisicoes do mundo exterior; a segunda porta é a interna, porta que o container conhece e executa a aplicaçao internamente.  

Parar a aplicação: 

```bash
$ docker-compose stop 
```

Remover os containers: 

```bash
$ docker-compose down 
```

## Criação do registro no Short'n'Sweet 

Uma vez que a aplicação esteja no ar, é necessário acessar a funcionalidade de criação do registro via Swagger http://www.shortnsweet.link/api 

No endpoint `POST /short-url`, colar o payload seguinte para a criação da url 

```json 
{
    "originalUrl": "https://www.longo-url-que-sera-diminuido",
    "uniqueId": "", 
    "numberClicks": 0, 
    "user": "nomedousuario"
}
```

## Testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Suporte

Como obter suporte para o Short'n'Sweet? 

## Stay in touch

- Author - [Julio Torres](https://kryptogarten.ca)
- Website - [https://www.shortnsweet.link](https://www.shortnsweet.link/)

## License

Short'n'Sweet is [MIT licensed](LICENSE).

