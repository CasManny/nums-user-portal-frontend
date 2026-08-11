import { BriefcaseBusiness, Copy, FileText, Info } from "lucide-react";

interface ApplicationSummaryProps {
  applicationReference?: string;
  admissionYear?: string;
  applicationFee?: string;
  isComplete?: boolean;
}

const requiredDocuments = [
  "Passport Photograph",
  "JAMB Result Slip",
  "O'Level Result (WAEC/NECO)",
  "Birth Certificate / Declaration of Age",
  "Local Government Identification",
];

export default function ApplicationSummary({
  applicationReference = "NUEI-2026-000231",
  admissionYear = "2026/2027",
  applicationFee = "₦2,000.00",
  isComplete = false,
}: ApplicationSummaryProps) {
  const summaryItems = [
    {
      icon: Copy,
      label: "Application Reference",
      value: applicationReference,
    },
    {
      icon: BriefcaseBusiness,
      label: "Admission Year",
      value: admissionYear,
    },
    {
      icon: FileText,
      label: "Application Fee",
      value: applicationFee,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Application Summary */}
      <div className="rounded-xl border bg-background p-5 shadow-sm">
        <h2 className="mb-5 text-base font-semibold text-foreground">
          Application Summary
        </h2>

        <div className="space-y-5">
          {summaryItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-muted-foreground" />

                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{item.label}</p>

                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Application Status */}
        <div className="mt-5 flex items-start gap-2 rounded-lg border border-blue-200 bg-blue-50/50 p-3">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />

          <p className="text-xs leading-5 text-blue-700">
            {isComplete
              ? "Your application is complete. You can now proceed with submission."
              : "Your application is not complete yet. Please complete all steps."}
          </p>
        </div>
      </div>

      {/* Required Documents */}
      <div className="rounded-xl border bg-background p-5 shadow-sm">
        <h2 className="mb-5 text-base font-semibold text-foreground">
          Required Documents
        </h2>

        <div className="space-y-4">
          {requiredDocuments.map((document) => (
            <div key={document} className="flex items-center gap-3">
              <FileText className="h-[17px] w-[17px] shrink-0 text-muted-foreground" />

              <span className="text-sm text-muted-foreground">{document}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
