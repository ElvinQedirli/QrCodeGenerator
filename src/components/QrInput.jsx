import React from 'react'
import '../assets/scss/components/input.scss'

export const QrInput = ({type, value, onChange,placeholder,...rest}) => {
  return (
    <div {...rest}>
        <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        />
    </div>
  )
}

export default QrInput
