import { Trash2 } from 'lucide-react';

export function Card({ device, onRemove }) {
  const dailyEnergy =
  Number(device.power) *
  Number(device.hours) *
  Number(device.quantity);

  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-[#DC143C]/30 transition-colors">
      <div className="flex-1">
        <h4 className="text-gray-900">{device.deviceName}</h4>
        <div className="flex gap-4 mt-1 text-sm text-gray-600">
          <span>{device.power}W</span>
          <span>×</span>
          <span>{device.hours}h/day</span>
          <span>×</span>
          <span>{device.quantity} unit{device.quantity > 1 ? 's' : ''}</span>
          <span className="text-[#FFC300] font-medium">= {dailyEnergy.toFixed(0)} Wh/day</span>
        </div>
      </div>
      <button
        onClick={onRemove}
        className="p-2 text-gray-400 hover:text-[#DC143C] hover:bg-red-50 rounded transition-colors"
        aria-label="Remove device"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}
