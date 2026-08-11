import Stepper from "@/components/shared/Stepper";
import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Personal Details",
  },
  {
    id: 2,
    title: "Academic Info",
  },
  {
    id: 3,
    title: "Program Choice",
  },
  {
    id: 4,
    title: "Documents",
  },
  {
    id: 5,
    title: "Review & Submit",
  },
];

export default function ApplicationFormStepper() {
  const [currentStep, setCurrentStep] = useState(0);

  console.log(setCurrentStep);
  
  return (
    <div className="space-y-8">
      <Stepper steps={steps} currentStep={currentStep} />
{/* 
      <div className="flex gap-4">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
          className="rounded-md border px-4 py-2"
        >
          Previous
        </button>

        <button
          onClick={() =>
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
          }
          className="rounded-md bg-green-600 px-4 py-2 text-white"
        >
          Next
        </button>
      </div> */}
    </div>
  );
}
