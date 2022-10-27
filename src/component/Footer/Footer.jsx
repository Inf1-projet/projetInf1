import Link from "../Link/Link";
import Button from "../Button/Button";
import "./footer.css";


const Footer = ({
    link,
    name,
    onClick
}) => {
    return (

        <footer>
            <div>
            <Button textButton="Return home" onClick={onClick}></Button>
            <Link link={link} name={name}></Link>
            </div>
        </footer>
    )
}

export default Footer;