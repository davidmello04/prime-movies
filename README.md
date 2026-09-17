Prime Movies

Aplicação web desenvolvida em React para consultar filmes em cartaz, visualizar informações detalhadas e manter uma lista de favoritos no navegador. Os dados são consumidos da API do The Movie Database (TMDb).

Funcionalidades

listagem de filmes em cartaz;

visualização de título, pôster, sinopse e avaliação;

acesso à pesquisa do trailer no YouTube;

inclusão e remoção de filmes da lista de favoritos;

persistência dos favoritos com localStorage;

navegação entre páginas com React Router;

notificações de ações com React Toastify;

tratamento de rota para filmes não encontrados.

Tecnologias

React 18

JavaScript

React Router DOM

Axios

React Toastify

CSS

API do TMDb


## Screenshots

Tela Inicial!![image](https://github.com/davidmello04/dragonballz-memory-game/assets/102268159/d928de34-3cfa-4418-b856-a3e504324187)

Tela Lista de Favoritos![image](https://github.com/davidmello04/dragonballz-memory-game/assets/102268159/de83f1cb-f2ab-44c4-9151-ad5831a41ef7)

Tela Detalhes do Filme![image](https://github.com/davidmello04/dragonballz-memory-game/assets/102268159/892a5fed-4e5a-44e1-8a9b-944dbeff12c4)


## Funcionalidades

- Lista de filmes em cartaz: A aplicação exibe uma lista dos filmes em cartaz no cinema, obtendo informações da API do TMDb. Os usuários podem ver detalhes básicos dos filmes, como título e pôster.

- Salvar favoritos: Os usuários podem salvar filmes em uma lista de favoritos usando o recurso de local storage do navegador. Os filmes marcados como favoritos serão mantidos mesmo após o fechamento da página.

- Excluir da lista de favoritos: Os usuários têm a opção de remover filmes da lista de favoritos, proporcionando uma experiência personalizada de seleção.

- Detalhes do filme: Os usuários podem acessar informações detalhadas sobre um filme específico, incluindo sinopse, avaliação e trailer.


## Como Usar

1. Clone este repositório para o seu ambiente local usando o seguinte comando: git clone https://github.com/davidmello04/prime-movies
2. Navegue para o diretório do projeto: cd prime-movies
3. Instale as dependências do projeto: npm install
4. Inicie a aplicação: npm start
5. Acesse a aplicação no seu navegador em: http://localhost:3000


## Configuração da API

* Para que a aplicação funcione corretamente, você precisará de uma chave de API válida do https://developer.themoviedb.org/reference/search-movie (TMDb) .
* Crie um arquivo "env.local" na raiz do projeto e adicione REACT_APP_API_KEY="SUA_CHAVE_KEY" 

## Tecnologias Utilizadas

- React
- JavaScript
- CSS
- HTML
- API do The Movie Database (TMDb)


## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests para melhorias, correções de bugs ou novos recursos.


## Autor
David Bezerra de Melo [davidmello04](https://github.com/davidmello04) - Criador do prime-movies.
