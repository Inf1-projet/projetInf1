import './title.css'

const Title = ({ children, size = 'small'})=>{
    return(
        <p
            className={`${size}`}
        >
            {children}
        </p>
    )
}

export default Title;