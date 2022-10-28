import './header.css'
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import Li from '../Li/Li';
const Header = () => {
    return (
        <nav
        className='header'
        >
        <ul>
            <Li item={<Link to="/" className='link'>Home</Link>}></Li>
            <Li item={<Logo logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"></Logo>}></Li>  
            <Li item={<Link to="/game" className='link'>Game</Link>}></Li>
        </ul>
        </nav>  );

}

export default Header;