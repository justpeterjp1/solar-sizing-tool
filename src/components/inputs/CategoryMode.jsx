import { useState } from 'react';
import { Lightbulb, Fan, AirVent, Tv, Utensils, Monitor, Droplets, TrendingUp } from 'lucide-react';


const categories = [
  { id: 'lighting', label: 'Lighting', icon: Lightbulb },
  { id: 'fans', label: 'Fans', icon: Fan },
  { id: 'ac', label: 'Air Conditioning', icon: AirVent },
  { id: 'tv', label: 'Television / Entertainment', icon: Tv },
  { id: 'kitchen', label: 'Kitchen Appliances', icon: Utensils },
  { id: 'office', label: 'Office Equipment', icon: Monitor },
  { id: 'water', label: 'Water Pumping', icon: Droplets },
];

export default function CategoryMode() {
  const [selections, setSelections] = useState({
    lighting: 'medium',
    fans: 'medium',
    ac: 'low',
    tv: 'medium',
    kitchen: 'medium',
    office: 'low',
    water: 'low',
  });

  function handleSubmit(e) {
    e.preventDefault();

    const confirmProceed = window.confirm(
      "Please confirm your selections. Continue anyway?"
    );

    if (confirmProceed) {
      console.log("selections:", selections);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#FFC300]/10 rounded-lg">
                  <Icon className="w-5 h-5 text-[#FFC300]" />
                </div>
                <span className="text-gray-900">{category.label}</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {['low', 'medium', 'high'].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() =>
                      setSelections({ ...selections, [category.id]: level })
                    }
                    className={`py-2 px-3 rounded text-sm transition-all ${
                      selections[category.id] === level
                        ? 'bg-[#DC143C] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        className="w-full bg-[#DC143C] hover:bg-[#B01030] text-white px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
      >
        <TrendingUp className="w-5 h-5" />
        Generate Load Estimate
      </button>
    </form>
  );
}
