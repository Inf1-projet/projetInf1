import './styleLink.css';

const Link = ({
    link,
    name
}) => {
    return (

        <a href={link} class="link" target="_blank">
            {name}
        </a>
    )
}

export default Link;