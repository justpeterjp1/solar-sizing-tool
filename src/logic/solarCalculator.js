export function calculateDeviceEnergy(device) {
  return (
    Number(device.power) *
    Number(device.hours) *
    Number(device.quantity)
  );
}

export function calculateTotalEnergy(devices) {
  return devices.reduce((total, device) => {
    return total + calculateDeviceEnergy(device);
  }, 0);
}

export function addSafetyMargin(energy) {
  return energy * 1.25;
}

export function recommendInverter(energy) {

  if (energy <= 2000) {
    return "1.5kVA";
  }

  if (energy <= 5000) {
    return "3.5kVA";
  }

  if (energy <= 8000) {
    return "5kVA";
  }

  return "7.5kVA";
}

export function recommendBattery(energy) {

  if (energy <= 2000) {
    return "24V 100Ah";
  }

  if (energy <= 5000) {
    return "24V 200Ah";
  }

  return "48V 200Ah";
}

export function recommendPanels(energy) {

  const panelWattage = 550;

  const totalPanelPower =
    (energy / 5) * 1.2;

  return Math.ceil(
    totalPanelPower / panelWattage
  );
}