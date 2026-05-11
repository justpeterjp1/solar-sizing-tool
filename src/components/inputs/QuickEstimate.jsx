import { useState } from "react";
import { Calculator } from "lucide-react";
import Button from "../shared/Button";
import { buildingPresets, estimatedPerRoom, optionalEquipmentPresets, usageMultipliers } from '@/logic/presets'
import { calculateResults } from '@/logic/solarCalculator'
import { toast } from "sonner";

const QuickEstimate = ({ onCalculate, loading, setLoading, setModal }) => {
  const [error, setError] = useState("");
  const [userInput, setUserInput] = useState({
    buildingType: "",
    other: "",
    usageIntensity: "medium",
    optionalEquipment: [],
  });

   const btnAnimate = 'transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]'

  function handleQuickEstimate(userInput) {
    const usageMultiplier =
      usageMultipliers[userInput.usageIntensity];
      console.log(usageMultiplier)

    let energy = 0;

    // STANDARD BUILDING TYPES
    if (userInput.buildingType !== "other") {

      energy =
        buildingPresets[userInput.buildingType] *
        usageMultiplier;
    }

    // CUSTOM ROOM INPUT
    else if (userInput.other) {
      const numOfRooms = parseInt(
        userInput.other.replace(/\D/g, ""),
        10
      );

      energy =
        numOfRooms *
        estimatedPerRoom[userInput.usageIntensity];
    }
    
    // OPTIONAL EQUIPMENT
    userInput.optionalEquipment.forEach((equipment) => {

      energy +=
        optionalEquipmentPresets[equipment] *
        usageMultiplier;
    });
   
     const calculatedResults = calculateResults(energy)

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
     setError("");
    if (!userInput.buildingType) {
      toast.error("Please select a building type or specify other type of building");
      return;
    } else if (userInput.buildingType === "other" && !userInput.other) {
      toast.error("Please specify the other building type and number of rooms");
      return;
    }
    // Confirm no extra optional equipment
    
    
    handleQuickEstimate(userInput);
  }

  function handleEquipmentChange(equipment, checked) {
    setUserInput((prev) => ({
      ...prev,
      optionalEquipment: checked
        ? [...prev.optionalEquipment, equipment]
        : prev.optionalEquipment.filter((item) => item !== equipment),
    }));
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>

      {/* Building Type */}
      <div>
        <label
          htmlFor="buildingType"
          className="block text-sm text-gray-700 mb-2"
        >
          Select Building Type
        </label>

        <select
          id="buildingType"
          value={userInput.buildingType}
          onChange={(e) =>
            setUserInput((prev) => ({
              ...prev,
              buildingType: e.target.value,
            }))
          }
          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none"
        >
          <option value="">Select a building type</option>

          <option value="self-contain">
            Single Room Self Contain
          </option>

          <option value="1-bedroom">
            Mini Flat (1 Bedroom Apartment)
          </option>

          <option value="2-bedroom">
            2 Bedroom Apartment
          </option>

          <option value="3-bedroom">
            3 Bedroom Apartment
          </option>

          <option value="other">Other</option>
        </select>
      </div>

      {/* Other Building Type */}
      {userInput.buildingType === "other" && (
        <div>
          <label
            htmlFor="otherBuildingType"
            className="block text-sm text-gray-700 mb-2"
          >
            Specify Other Building Type
          </label>

          <input
            type="text"
            id="otherBuildingType"
            value={userInput.other}
            placeholder="Enter other building type"
            onChange={(e) =>
              setUserInput((prev) => ({
                ...prev,
                other: e.target.value,
              }))
            }
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>
      )}

      {/* Usage Intensity */}
      <fieldset>
        <legend className="block text-sm text-gray-700 mb-2">
          Usage Intensity
        </legend>

        <div className="grid grid-cols-3 gap-3">
          {["low", "medium", "high"].map((intensity) => (
            <button
              key={intensity}
              type="button"
              onClick={() =>
                setUserInput((prev) => ({
                  ...prev,
                  usageIntensity: intensity,
                }))
              }
              className={`py-3 px-4 rounded-lg border-2 transition-all ${btnAnimate} ${userInput.usageIntensity === intensity
                  ? "border-[#DC143C] bg-red-50 text-[#DC143C]"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                }`}
            >
              {intensity.charAt(0).toUpperCase() + intensity.slice(1)}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Optional Equipment */}
      <fieldset>
        <legend className="block text-sm text-gray-700 mb-3">
          Optional Equipment
        </legend>

        <div className="space-y-3">
          {[
            "ac",
            "refrigerator",
            "Washing Machine",
            "Pumping Machine",
            "Water Heater",
            "Electric Stove",
          ].map((equipment) => {
            const id = equipment.toLowerCase().replace(/\s/g, "-");

            return (
              <label
                key={equipment}
                htmlFor={id}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  id={id}
                  checked={userInput.optionalEquipment.includes(equipment)}
                  onChange={(e) =>
                    handleEquipmentChange(
                      equipment,
                      e.target.checked
                    )
                  }
                  className="w-5 h-5 border-gray-300 rounded"
                />

                <span className="text-gray-900">
                  {equipment}
                </span>
              </label>
            );
          })}
        </div>
            {userInput.optionalEquipment.length === 0 && (
                <p className="text-grey-600 text-sm mt-1">
                  Hint: For more accurate estimates, include optional appliances like AC or refrigerators.
                </p>
              )}
            {error && (
                <p className="text-red-600 text-sm">
                  {error}
                </p>
              )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-[#DC143C] hover:bg-[#B01030] text-white mt-4 p-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          <Calculator className="w-5 h-5" />
          {loading ? "Calculating..." : "Calculate System Requirements"}
        </Button>
      </fieldset>
    </form>
  );
};

export default QuickEstimate;