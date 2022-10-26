import './styleLogo.css';

const Logo = ({
    logo
}) => {
    return (

        <img src={logo} alt="logo" className="logo">
        </img>
    )
}

export default Logo;