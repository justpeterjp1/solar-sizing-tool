import React from 'react'

const Button = ({ children, onClick, variant = 'primary', className= '', ...props }) => {
  const baseClasses = 'px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    secondary: 'bg-yellow-400 text-gray-800 hover:bg-yellow-500 focus:ring-gray-500'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button