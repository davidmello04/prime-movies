import axios from "axios";

//Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=718a55e25ad423913e1cb71004945684&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api