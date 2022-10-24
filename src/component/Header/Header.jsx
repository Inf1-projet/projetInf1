import './header.css'
import Logo from '../Logo/Logo';

const Header = ({logo}) => {
    return (
            <nav
            className='header'
            >
            <ul>
                <li>Page 1</li>
                <li><Logo logo={logo}></Logo></li>
                <li>Page 3</li>
            </ul>
            </nav>
    );
}

export default Header;