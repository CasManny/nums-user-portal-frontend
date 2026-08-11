import { Check } from "lucide-react";

interface ApplicationSubmittedAlertProps {
  title?: string;
  description?: string;
}

const ApplicationSubmittedAlert = ({
  title = "Application Submitted Successfully!",
  description = "Your application has been received and is currently under review.",
}: ApplicationSubmittedAlertProps) => {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50/50 px-4 py-4">
      {/* Check Icon */}
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
        <Check className="h-4 w-4" strokeWidth={2.5} />
      </div>

      {/* Content */}
      <div>
        <h2 className="text-sm font-semibold text-green-800">{title}</h2>

        <p className="mt-0.5 text-xs text-green-700">{description}</p>
      </div>
    </div>
  );
};

export default ApplicationSubmittedAlert;
