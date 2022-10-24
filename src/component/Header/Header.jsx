import './header.css'
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav
        className='header'
        >
        <ul>
            <li><Link to="/home" className='link'>Home</Link></li>
            <li><Logo logo="logo"></Logo></li>  
            <li><Link to="/game" className='link'>Flags Game</Link></li>
        </ul>
        </nav>  );

}

export default Header;