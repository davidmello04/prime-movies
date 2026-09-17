# Prime Movies

Aplicação web desenvolvida em React para consultar filmes em cartaz, visualizar informações detalhadas e manter uma lista de favoritos no navegador. Os dados são consumidos da API do [The Movie Database (TMDb)](https://www.themoviedb.org/).

## Funcionalidades

- listagem de filmes em cartaz;
- visualização de título, pôster, sinopse e avaliação;
- acesso à pesquisa do trailer no YouTube;
- inclusão e remoção de filmes da lista de favoritos;
- persistência dos favoritos com `localStorage`;
- navegação entre páginas com React Router;
- notificações de ações com React Toastify;
- tratamento de rota para filmes não encontrados.

## Tecnologias

- React 18
- JavaScript
- React Router DOM
- Axios
- React Toastify
- CSS
- API do TMDb


## Screenshots

Tela Inicial!![image](https://github.com/davidmello04/dragonballz-memory-game/assets/102268159/d928de34-3cfa-4418-b856-a3e504324187)

Tela Lista de Favoritos![image](https://github.com/davidmello04/dragonballz-memory-game/assets/102268159/de83f1cb-f2ab-44c4-9151-ad5831a41ef7)

Tela Detalhes do Filme![image](https://github.com/davidmello04/dragonballz-memory-game/assets/102268159/892a5fed-4e5a-44e1-8a9b-944dbeff12c4)


### Página inicial

![Página inicial do Prime Movies](https://github.com/davidmello04/dragonballz-memory-game/assets/102268159/d928de34-3cfa-4418-b856-a3e504324187)

### Lista de favoritos

![Lista de favoritos do Prime Movies](https://github.com/davidmello04/dragonballz-memory-game/assets/102268159/de83f1cb-f2ab-44c4-9151-ad5831a41ef7)

### Detalhes do filme

![Detalhes de um filme no Prime Movies](https://github.com/davidmello04/dragonballz-memory-game/assets/102268159/892a5fed-4e5a-44e1-8a9b-944dbeff12c4)

## Como executar

### Pré-requisitos

- Node.js 18 ou superior
- npm
- uma chave de API do TMDb

### Instalação

```bash
git clone https://github.com/davidmello04/prime-movies.git
cd prime-movies
npm install
```

Crie um arquivo `.env.local` na raiz do projeto:

```env
REACT_APP_API_KEY=sua_chave_da_api_tmdb
```

Inicie a aplicação:

```bash
npm start
```

Acesse `http://localhost:3000`.

## Scripts disponíveis

```bash
npm start    # inicia o ambiente de desenvolvimento
npm run build
npm test
```

## Observações

- A chave da API não deve ser enviada ao repositório.
- Os favoritos ficam armazenados apenas no navegador utilizado.
- Este projeto usa Create React App.

## Autor

Desenvolvido por [David Melo](https://github.com/davidmello04).

[LinkedIn](https://www.linkedin.com/in/david-melo-/)

