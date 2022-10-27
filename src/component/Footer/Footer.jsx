import Link from "../Link/Link";
import Button from "../Button/Button";
import "./footer.css";


const Footer = ({
    previous = true || false,
    link,
    name,
    onCLick
}) => {
    return (

        <footer>
            <div>
            <Link link={link} name={name}></Link>
            {previous ? <Button text="Retour" onCLick={onCLick}></Button> : {}}
            </div>
        </footer>
    )
}

export default Footer;