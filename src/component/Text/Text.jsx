import './text.css'

const Text = ({ children, bold = false}) => {
    return (
        <p 
    
          style={ bold ? {fontWeight: 'bold'} : {}}>
            {children}
        </p>
    )
}

export default Text;