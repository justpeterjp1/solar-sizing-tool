import { useState } from 'react';
import { Lightbulb, Fan, AirVent, Tv, Utensils, Monitor, Droplets, TrendingUp } from 'lucide-react';
import { categoryLoadPreset } from '@/logic/presets'
import { calculateResults } from '@/logic/solarCalculator';
import { toast } from 'sonner';

const categories = [
  { id: 'lighting', label: 'Lighting', icon: Lightbulb },
  { id: 'fans', label: 'Fans', icon: Fan },
  { id: 'ac', label: 'Air Conditioning', icon: AirVent },
  { id: 'tv', label: 'Television / Entertainment', icon: Tv },
  { id: 'kitchen', label: 'Kitchen Appliances', icon: Utensils },
  { id: 'office', label: 'Office Equipment', icon: Monitor },
  { id: 'water', label: 'Water Pumping', icon: Droplets },
];

export default function CategoryMode({ onCalculate, error, loading, setLoading }) {
  const [selections, setSelections] = useState({
    lighting: 'medium',
    fans: 'medium',
    ac: 'low',
    tv: 'medium',
    kitchen: 'medium',
    office: 'low',
    water: 'low',
  });

  function handleCategoryEstimate(selections) {
     let energy = 0;
    Object.entries(selections).forEach(([selection, level]) => {
      energy += categoryLoadPreset[selection][level];
    });

    const calculatedResults = calculateResults(energy);
  // confirm output is working
  console.log("Calculated Results:", calculatedResults);

   setLoading(true);
      
      const toastId = toast.loading("Generating energy report...");

      setTimeout(() => {
        setLoading(false);

        onCalculate(calculatedResults);

          toast.success("Report ready", {
          id: toastId,
        }); }, 2500);
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleCategoryEstimate(selections);
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
                    className={`py-2 px-3 rounded text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
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
              {error && (
                <p className="text-red-600 text-sm">
                  {error}
                </p>
              )}

      <button
        type="submit"
        className="w-full bg-[#DC143C] hover:bg-[#B01030]
         text-white px-6 py-3.5 rounded-lg flex items-center
         transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] 
         justify-center gap-2 shadow-sm"
      >
        <TrendingUp className="w-5 h-5" />
       {loading ? "Calculating..." : "Generate Load Estimate"}
      </button>
    </form>
  );
}
