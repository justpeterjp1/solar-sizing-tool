import React from 'react'

const Input = ({ label, placeholder }) => {
  return (
    <>
    <label>{label}</label>
    <input placeholder={placeholder} />
    </>
  )
}

export default Input