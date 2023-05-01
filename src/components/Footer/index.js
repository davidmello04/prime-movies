import './footer.css'

function Footer(){
    return(
        <div>
            <footer>
                <p id="footer">
                    Feito por David Melo | Utilizando a API themoviedb.
                </p>
                <small>Os dados foram obtidos da API <a href="https://www.themoviedb.org" target="blank">themoviedb</a>, uma fonte pública de
                    informações sobre Filmes.</small>
            </footer>
        </div>
    )
}

export default Footer;