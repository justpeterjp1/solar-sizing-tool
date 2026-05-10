import React from 'react'
import { StatCard } from '../shared/StatCard'
import { Zap, BatteryCharging, Sun, Gauge } from 'lucide-react'

const ResultsSection = ({ results }) => {

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-gray-900 mb-6">System Requirements</h2>
        <div className="space-y-4">
          <StatCard
            label="Total Energy Consumption"
            value={results.energy || 0}
            unit="Wh/day"
            icon={Zap}
            iconColor="#FFC300"
          />
          <StatCard
            label="Required Battery Capacity"
            value={results.battery || 0}
            unit="Ah @ 12V"
            icon={BatteryCharging}
            iconColor="#DC143C"
          />

          <StatCard
            label="Number of Solar Panels"
            value={Math.ceil(results.panels || 0)}
            unit="× 100W panels"
            icon={Sun}
            iconColor="#FFC300"
          />

          <StatCard
            label="Recommended Inverter Size"
            value={results.inverter || 0}
            unit="W"
            icon={Gauge}
            iconColor="#DC143C"
          />
        </div>
      </div>
    </div>
  )
}

export default ResultsSection