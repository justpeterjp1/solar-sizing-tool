import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { Card } from "../../components/shared/Card"
import Button from '../shared/Button';
import { calculateResults } from '@/logic/solarCalculator';

export default function ManualMode({ onCalculate, devices, setDevices }) { 
  const [deviceInput, setDeviceInput] = useState({
    deviceName: '',
    power: '',
    hours: '',
    quantity: ''
  });

  useEffect(() => {
  console.log("devices updated:", devices);
}, [devices]);

  function handleManualComputing() {
    // Implementation for manual computing logic

    onCalculate(devices);
  }


  function handleSubmit(e) {
     e.preventDefault();
    if (deviceInput.deviceName && deviceInput.power && deviceInput.hours && deviceInput.quantity) {
      const nextDevices = [...devices, deviceInput];
      setDevices(nextDevices);
      console.log("New device added:", deviceInput);
      console.log("devices:", nextDevices);
      setDeviceInput({
        deviceName: '',
        power: '',
        hours: '',
        quantity: ''
      });
    }
  }
  console.log(devices)


  // function onUpdateDevice(index, updatedDevice) {
  //   setDevices(prev => prev.map((device, i) => i === index ? updatedDevice : device));
  // }
  function handleManualComputing(devices) {
      let energy = devices.reduce((total, device) => {
        return total + (device.power * device.hours * device.quantity);
      }, 0);
      
      const calculatedResults = calculateResults(energy)

      onCalculate(calculatedResults);

  }

  function onRemoveDevice(index) {
    setDevices(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="deviceName" className="block text-sm text-gray-700 mb-2">
            Device Name
          </label>
          <input
            id="deviceName"
            type="text"
            value={deviceInput.deviceName}
            onChange={(e) => { setDeviceInput({ ...deviceInput, deviceName: e.target.value }) }}
            placeholder="e.g., LED Light, Laptop"
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent transition-shadow"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="power" className="block text-sm text-gray-700 mb-2">
              Power (W)
            </label>
            <input
              id="power"
              type="number"
              value={deviceInput.power}
              onChange={(e) => { setDeviceInput({ ...deviceInput, power: parseFloat(e.target.value) || 0 }) }}
              placeholder="100"
              min="0"
              step="1"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="hours" className="block text-sm text-gray-700 mb-2">
              Hours/Day
            </label>
            <input
              id="hours"
              type="number"
              value={deviceInput.hours}
              onChange={(e) => { setDeviceInput({ ...deviceInput, hours: parseFloat(e.target.value) || 0 }) }}
              placeholder="8"
              min="0"
              max="24"
              step="1"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm text-gray-700 mb-2">
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              value={deviceInput.quantity}
              onChange={(e) => { setDeviceInput({ ...deviceInput, quantity: Number(e.target.value) || 1 }) }}
              placeholder="1"
              min="1"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent transition-shadow"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#DC143C] hover:bg-[#B01030] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5" />
          Add Device
        </button>
      </form>

      { devices.length > 0 && (
        <div>
          <h3 className="text-gray-900 mb-4">Devices ({devices.length})</h3>
          <div className="space-y-3">
            {devices.map((device, index) => (
              <Card
                key={index}
                device={device}
                onRemove={() => onRemoveDevice(index)}
              />
            ))}

          </div>
        </div>
      )}
      { devices.length >= 2 && (
        <Button 
          onClick={() => handleManualComputing(devices)}
          className='w-full text-white mt-4 p-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"'
          variant='secondary'
        >Analyse system Specs</Button>)}
    </div>
  );
}
