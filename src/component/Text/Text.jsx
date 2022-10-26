import './text.css'

const Text = ({ children, bold = false, id,hidden = "hidden"||null}) => {
    return (
        <p 
            id={id}
            className={hidden}
          style={ bold ? {fontWeight: 'bold'} : {}}>
            {children}
        </p>
    )
}

export default Text;