import React from 'react'
import { motion } from 'framer-motion'
const InfoCard = ({ message, icon, results }) => {
  return (
    <motion.div
      key={results.energy}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex bg-blue-100 border border-blue-300 text-blue-800 p-2 rounded-lg gap-2"
    >
      {icon && <div className="flex items-center mb-1">{icon}</div>}
      <p>{message}</p>
    </motion.div>
  )
}

export default InfoCard