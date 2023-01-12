import React from "react"
import './index.css'

const Button = ({ onClick, children, type='primary', size = 'md' , disabled = false}) => {
    return (
        <button className={size + ' base-btn-style ' + type + (disabled ? ' disabled' : '')} type="button" onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button