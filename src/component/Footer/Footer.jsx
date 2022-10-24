import Link from "../Link/Link";
import Button from "../Button/Button";


const Footer = ({
    previous = true || false,
    link1,
    name1,
    link2,
    name2
}) => {
    return (

        <footer>
            <Link link={link1}>{name1}</Link>
            <Link link={link2}>{name2}</Link>
            {previous ? <Button text="Retour" onCLick={null}></Button> : {}}
        </footer>
    )
}

export default Footer;