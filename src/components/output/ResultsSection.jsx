import { Lightbulb } from 'lucide-react'
import React from 'react'
import { buildingPresets, estimatedPerRoom, optionalEquipmentPresets } from '@/logic/presets'

const ResultsSection = () => {
    
  return (
    <div>
         <div className="p-5 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">Total Energy Consumption</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-semibold text-gray-900">5000</span>
             <span className="text-lg text-gray-600">Wh</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg" >
          <Lightbulb className="w-6 h-6"  />
        </div>
      </div>
    </div>
    </div>
  )
}

export default ResultsSection