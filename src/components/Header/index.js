import { Link } from 'react-router-dom';
import './header.css'

function Header(){
    return(
        <header>
            <Link className='logo' to="/">Prime Movies</Link>
            <Link className='favoritos' to="/favoritos">Minha Lista</Link>
        </header>
    )
}

export default Header;