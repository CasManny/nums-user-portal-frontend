import { CheckCircle2, Circle } from "lucide-react";

interface ProgressStep {
  label: string;
  completed: boolean;
}


const ApplicationProgress = () => {
  const steps: ProgressStep[] = [
    {
      label: "Account Created",
      completed: true,
    },
    {
      label: "Personal Information",
      completed: true,
    },
    {
      label: "Academic Information",
      completed: true,
    },
    {
      label: "Documents Uploaded",
      completed: true,
    },
    {
      label: "Admission Decision",
      completed: false,
    },
  ];
  const completedSteps = steps.filter((step) => step.completed).length;

  const progress =
    steps.length > 0 ? Math.round((completedSteps / steps.length) * 100) : 0;

  return (
    <div className="rounded-xl border bg-background p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">
          Application Progress
        </h3>

        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
          {progress}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-slate-900 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Steps */}
      <div className="mt-4 space-y-2.5">
        {steps.map((step) => (
          <div key={step.label} className="flex items-center gap-2.5">
            {step.completed ? (
              <CheckCircle2 className="h-4 w-4 shrink-0 fill-emerald-500 text-white" />
            ) : (
              <Circle className="h-4 w-4 shrink-0 text-slate-400" />
            )}

            <span
              className={`text-xs ${
                step.completed ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationProgress;
