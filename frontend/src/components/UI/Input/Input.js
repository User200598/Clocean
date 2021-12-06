import './Input.css';
import React from 'react'

export default function Input(props) {
    switch(props.type) {
        case('input'): 
            inputElement=(<input 
                className={}
               {props.elementConfig}
               value={props.value}
               onChange={props.change}
            />)
            break;
        case('passwords'): 
        inputElement=(<input 
            className={}
            {props.elementConfig}
            value={props.value}
            onChange={props.change}
        />)
            break;
        default:
            inputElement=(<input 
                className={}
                {props.elementConfig}
                value={props.value}
                onChange={props.change}
            />)
            break;
    }

    return (
        <div className='form-group'>
            {InputElement}
            <label>{props.elementConfig.placeholder}</label>
        </div>
    )
}
