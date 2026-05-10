export const buildingPresets = {
  "self-contain": 1800,
  "1-bedroom": 3000,
  "2-bedroom": 4500,
  "3-bedroom": 7000,
  duplex: 11000,
};

export const estimatedPerRoom = {
  low: 800,
  medium: 1400,
  high: 2200
};

export const optionalEquipmentPresets = {
  refrigerator: 1200,
  ac: 4000,
  "Washing Machine": 900,
  "Pumping Machine": 900,
  "Water Heater": 2000,
  "Electric Stove": 1800,
};

export const usageMultipliers = {
  low: 0.8,
  medium: 1,
  high: 1.4,
};

export const categoryLoadPreset = {
  lighting: { low: 100, medium: 250, high: 500 },
  fans: { low: 150, medium: 300, high: 600 },
  ac: { low: 500, medium: 1500, high: 2500 },
  tv: { low: 100, medium: 200, high: 400 },
  kitchen: { low: 200, medium: 500, high: 1000 },
  office: { low: 100, medium: 300, high: 600 },
  water: { low: 100, medium: 300, high: 600 },
};