import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

import Card from './Card'
import Button from './Button'
import './Error.css'

const BackDrop = () => {
    return(
        <div className='backdrop'></div>
    )
} 

const Error = (props) => {
    return(
        <Fragment>
            {ReactDOM.createPortal(
                <BackDrop onConfirm={props.onConfirm}/>,
                document.getElementById('backdrop-root')
            )}
        </Fragment>
    )
}

export default Error