import React from "react"
import './index.css'

const Button = ({ onClick, children, type='primary', size = 'md' }) => {
    return (
        <button className={size + ' base-btn-style ' + type} type="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button