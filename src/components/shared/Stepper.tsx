import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface Step {
  id: number;
  title: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="w-full rounded-xl border bg-white pt-4 pb-2">
      <div className="relative flex">
        {steps.map((step, index) => {
          const completed = currentStep > index;
          const active = currentStep === index;

          return (
            <div
              key={step.id}
              className="relative flex flex-1 flex-col items-center"
            >
              {/* Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-1/2 top-4 h-[2px] w-full bg-slate-200 ">
                  <div
                    className={cn(
                      "h-full bg-green-600 transition-all duration-500",
                      completed ? "w-full" : "w-0",
                    )}
                  />
                </div>
              )}

              {/* Circle */}
              <div
                className={cn(
                  "relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white text-sm font-semibold",
                  completed && "border-green-600 bg-green-600 text-white",
                  active && "border-green-600 bg-green-600 text-white",
                  !completed && !active && "border-slate-300 text-slate-600",
                )}
              >
                {completed ? <Check className="h-5 w-5" /> : step.id}
              </div>

              {/* Title */}
              <p
                className={cn(
                  "mt-3 text-center text-sm font-medium",
                  currentStep >= index ? "text-green-700" : "text-slate-600",
                )}
              >
                {step.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
