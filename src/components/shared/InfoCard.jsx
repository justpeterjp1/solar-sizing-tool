import React from 'react'

const InfoCard = ({ message, icon}) => {
  return (
    <div className=" flex bg-blue-100 border border-blue-300 text-blue-800 p-2 rounded-lg gap-2">
      {icon && <div className="flex items-center mb-1">{icon}</div>}
      <p>{message}</p>
    </div>
  )
}

export default InfoCard