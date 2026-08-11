import { Button } from "@/components/ui/button";
import { ArrowRight, Clock3, FileText } from "lucide-react";

type ApplicationStatus = "UNDER_REVIEW" | "APPROVED" | "REJECTED" | "PENDING";

const ApplicationStatus = () => {
  const status: ApplicationStatus = "PENDING";
  const message =
    "Your application is currently under review by the admissions office.";

  const statusConfig = {
    UNDER_REVIEW: {
      label: "Under Review",
      className: "bg-amber-100 text-amber-700",
      icon: <Clock3 className="h-4 w-4" />,
    },
    APPROVED: {
      label: "Approved",
      className: "bg-emerald-100 text-emerald-700",
      icon: <Clock3 className="h-4 w-4" />,
    },
    REJECTED: {
      label: "Rejected",
      className: "bg-red-100 text-red-700",
      icon: <Clock3 className="h-4 w-4" />,
    },
    PENDING: {
      label: "Pending",
      className: "bg-muted text-muted-foreground",
      icon: <Clock3 className="h-4 w-4" />,
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <div className="rounded-xl border bg-background p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">
          Application Status
        </h3>

        <FileText className="h-4 w-4 text-muted-foreground" />
      </div>

      {/* Status */}
      <div
        className={`mt-5 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium ${currentStatus.className}`}
      >
        {currentStatus.icon}
        {currentStatus.label}
      </div>

      {/* Message */}
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
        {message ??
          "Your application is currently under review by the admissions office."}
      </p>

      {/* Action */}
      <Button variant="outline" className="mt-4 gap-2">
        View Details
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ApplicationStatus;
