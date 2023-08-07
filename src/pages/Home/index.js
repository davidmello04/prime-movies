import { useEffect, useState } from "react";
import api from '../../services/api'
import { Link } from 'react-router-dom';

import './home.css'

// URL DA API: /movie/now_playing?api_key=718a55e25ad423913e1cb71004945684&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: process.env.REACT_APP_API_KEY,
                    language: "pt-BR",
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0, 10))
            setFilmes(response.data.results)
            setLoading(false)
        }

        loadFilmes();

    })

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <h1>Filmes em Destaques</h1>
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            <strong>{filme.title}</strong>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;