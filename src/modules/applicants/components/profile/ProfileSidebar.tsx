import { Clock3, FileText } from "lucide-react";

import { cn } from "@/lib/utils";

interface ContactInformation {
  email: string;
  phoneNumber: string;
  alternatePhone?: string;
  currentAddress: string;
}

interface ApplicationSummaryData {
  applicationType: string;
  admissionYear: string;
  dateCreated: string;
  lastUpdated: string;
  applicationStatus: "Under Review" | "Submitted" | "Approved" | "Rejected";
}

interface ProfileSidebarProps {
  contact?: ContactInformation;
  application?: ApplicationSummaryData;
}

const defaultApplication: ApplicationSummaryData = {
  applicationType: "UTME",
  admissionYear: "2026/2027",
  dateCreated: "12 May 2026",
  lastUpdated: "20 May 2026, 10:45 AM",
  applicationStatus: "Under Review",
};

const ProfileSidebar = ({
  application = defaultApplication,
}: ProfileSidebarProps) => {
  return (
    <div className="space-y-3">
      {/* =========================================
          APPLICATION SUMMARY
      ========================================= */}
      <section className="rounded-lg border bg-background p-4">
        <h2 className="mb-4 text-xs font-semibold text-foreground">
          Application Summary
        </h2>

        <div className="space-y-3">
          <SummaryRow
            label="Application Type"
            value={application.applicationType}
          />

          <SummaryRow
            label="Admission Year"
            value={application.admissionYear}
          />

          <SummaryRow label="Date Created" value={application.dateCreated} />

          <SummaryRow label="Last Updated" value={application.lastUpdated} />

          <div className="grid grid-cols-[105px_1fr] items-center gap-2">
            <span className="text-[9px] font-medium text-muted-foreground">
              Application Status
            </span>

            <ApplicationStatus status={application.applicationStatus} />
          </div>
        </div>
      </section>
    </div>
  );
};

/* =========================================
   SUMMARY ROW
========================================= */

interface SummaryRowProps {
  label: string;
  value: string;
}

const SummaryRow = ({ label, value }: SummaryRowProps) => {
  return (
    <div className="grid grid-cols-[105px_1fr] items-center gap-2">
      <span className="text-[10px] font-medium text-muted-foreground">
        {label}
      </span>

      <span className="text-[10px] font-medium text-foreground">{value}</span>
    </div>
  );
};

/* =========================================
   APPLICATION STATUS
========================================= */

const ApplicationStatus = ({
  status,
}: {
  status: ApplicationSummaryData["applicationStatus"];
}) => {
  const statusStyles = {
    "Under Review": {
      className: "bg-orange-50 text-orange-700",
      icon: Clock3,
    },
    Submitted: {
      className: "bg-green-50 text-green-700",
      icon: FileText,
    },
    Approved: {
      className: "bg-green-50 text-green-700",
      icon: FileText,
    },
    Rejected: {
      className: "bg-red-50 text-red-700",
      icon: FileText,
    },
  };

  const config = statusStyles[status];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1 rounded-md px-2 py-1",
        "text-[10px] font-medium",
        config.className,
      )}
    >
      <Icon className="h-2.5 w-2.5" />

      {status}
    </span>
  );
};

export default ProfileSidebar;
