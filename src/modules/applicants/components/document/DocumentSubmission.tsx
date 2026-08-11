import { FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocumentSubmissionProps {
  totalDocuments?: number;
  uploaded?: number;
  pending?: number;
  rejected?: number;
}

const DocumentSubmission = ({
  totalDocuments = 6,
  uploaded = 5,
  pending = 1,
  rejected = 0,
}: DocumentSubmissionProps) => {
  const stats = [
    {
      label: "Total Documents",
      value: totalDocuments,
      className: "text-foreground",
    },
    {
      label: "Uploaded",
      value: uploaded,
      className: "text-green-600",
    },
    {
      label: "Pending",
      value: pending,
      className: "text-yellow-500",
    },
    {
      label: "Rejected",
      value: rejected,
      className: "text-red-500",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-5 rounded-lg border bg-background p-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Left section */}
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
          <FolderOpen className="h-5 w-5" />
        </div>

        {/* Title + description */}
        <div>
          <h2 className="text-sm font-semibold text-foreground">
            Document Submission
          </h2>

          <p className="mt-1 max-w-md text-xs leading-4 text-muted-foreground">
            Upload and manage all required documents
            <br />
            for your application.
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex min-w-[85px] flex-col items-center justify-center rounded-md border bg-background px-4 py-2.5"
          >
            <span className={cn("text-base font-semibold", stat.className)}>
              {stat.value}
            </span>

            <span className="mt-1 text-[13px] text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentSubmission;
