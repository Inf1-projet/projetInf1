import './text.css'

const Text = ({ children, bold = false, id, classText}) => {
    return (
        <p 
            id={id}
            className={classText}
          style={ bold ? {fontWeight: 'bold'} : {}}>
            {children}
        </p>
    )
}

export default Text;