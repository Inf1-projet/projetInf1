import './styleLink.css';

const Link = ({
    link,
    name
}) => {
    return (

        <a href={link} class="link">
            {name}
        </a>
    )
}

export default Link;