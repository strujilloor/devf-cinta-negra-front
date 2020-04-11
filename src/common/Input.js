import React from 'react'

const Input = ({ label, type, placeholder, value, name, required, change }) => {
    return (
        <div className="control-group">
            <div className="form-group floating-label-form-group controls">
                <label>{label}</label>
                <input 
                    type={type}
                    name={name}
                    className="form-control" 
                    placeholder={placeholder} 
                    value={value}
                    required={required}
                    onChange={change}
                />
                <p className="help-block text-danger"></p>
            </div>
        </div>
    )
}

export default Input
