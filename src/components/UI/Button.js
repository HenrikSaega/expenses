import './Button.css'

const Button = (props) =>{ 
    return(
        <button className='button' type={props.type || 'button'} onclick={props.onclick}>
            {props.children}
        </button>
    )
}

export default Button