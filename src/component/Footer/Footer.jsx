import Link from "../Link/Link";
import Button from "../Button/Button";
import "./footer.css";


const Footer = ({
    previous = true || false,
    link1,
    name1,
    link2,
    name2, 
    onCLick
}) => {
    return (

        <footer>
            <Link link={link1} name={name1}></Link>
            <Link link={link2} name={name2}></Link>
            {previous ? <Button text="Retour" onCLick={onCLick}></Button> : {}}
        </footer>
    )
}

export default Footer;