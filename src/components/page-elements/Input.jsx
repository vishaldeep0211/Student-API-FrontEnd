import React from 'react'

export default function Input({type="text", name, placeholder, handleChange}) {
    return (
        <div className="form-group">
            <input type={type} className="form-control" name={name} placeholder={placeholder} onChange={handleChange} required/>
        </div>
    )
}
