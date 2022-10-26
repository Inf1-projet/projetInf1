import './header.css'
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav
        className='header'
        >
        <ul>
            <li><Link to="/" className='link'>Home</Link></li>
            <li><Logo logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"></Logo></li>  
            <li><Link to="/game" className='link'>Game</Link></li>
        </ul>
        </nav>  );

}

export default Header;