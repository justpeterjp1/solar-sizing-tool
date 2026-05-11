import { useState } from "react";
import { QuickEstimateForm } from './QuickEstimateForm'
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
        <QuickEstimateForm
          userInput={userInput}
          setUserInput={setUserInput}
          handleSubmit={handleSubmit}
          handleEquipmentChange={handleEquipmentChange}
          loading={loading}
          error={error}
          btnAnimate={btnAnimate}
        />
  );
};

export default QuickEstimate;