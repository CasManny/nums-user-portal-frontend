import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Download,
  FileText,
  Info,
  Mail,
  Phone,
  Printer,
  Upload,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface InformationItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface QuickAction {
  title: string;
  description: string;
  icon: React.ElementType;
  iconClassName?: string;
  onClick?: () => void;
}

interface ApplicationInfoPanelProps {
  onDownload?: () => void;
  onPrint?: () => void;
  onViewApplication?: () => void;
  onUploadDocument?: () => void;
  onContactOffice?: () => void;
}

const informationItems: InformationItem[] = [
  {
    title: "Application Under Review",
    description:
      "Your application is currently being reviewed by the admissions office.",
    icon: Clock3,
  },
  {
    title: "Check Your Email",
    description:
      "You will receive updates on your application status via email.",
    icon: Mail,
  },
  {
    title: "Application Reference",
    description:
      "Use your application reference for all inquiries regarding this application.",
    icon: FileText,
  },
  {
    title: "Next Steps",
    description:
      "Shortlisted candidates will be invited for screening and further assessment.",
    icon: CalendarDays,
  },
];

const ApplicationInfoPanel = ({
  onDownload,
  onPrint,
  onViewApplication,
  onUploadDocument,
  onContactOffice,
}: ApplicationInfoPanelProps) => {
  const quickActions: QuickAction[] = [
    {
      title: "View My Application",
      description: "See full application details",
      icon: FileText,
      onClick: onViewApplication,
      iconClassName: "bg-blue-50 text-blue-600",
    },
    {
      title: "Upload Additional Document",
      description: "Add more supporting documents",
      icon: Upload,
      onClick: onUploadDocument,
      iconClassName: "bg-green-50 text-green-600",
    },
    {
      title: "Contact Admissions Office",
      description: "Get in touch with the admissions team",
      icon: Phone,
      onClick: onContactOffice,
      iconClassName: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <div className="space-y-4">
      {/* =========================================
          IMPORTANT INFORMATION
      ========================================= */}
      <section className="rounded-lg border bg-background p-5">
        {/* Header */}
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-white">
            <Info className="h-4 w-4" />
          </div>

          <h2 className="text-sm font-semibold text-foreground">
            Important Information
          </h2>
        </div>

        {/* Information Items */}
        <div className="space-y-4">
          {informationItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-xs font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 max-w-[280px] text-xs leading-4 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================
          DOWNLOAD & PRINT
      ========================================= */}
      <section className="rounded-lg border bg-background p-5">
        <h2 className="text-sm font-semibold text-foreground">
          Download & Print
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Download a copy of your application slip for your records.
        </p>

        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <button
            type="button"
            onClick={onDownload}
            className={cn(
              "flex h-9 items-center justify-center gap-2 rounded-md",
              "border border-blue-200 bg-background px-3",
              "text-xs font-medium text-foreground",
              "transition-colors hover:bg-blue-50",
            )}
          >
            <Download className="h-4 w-4" />
            Download PDF
          </button>

          <button
            type="button"
            onClick={onPrint}
            className={cn(
              "flex h-9 items-center justify-center gap-2 rounded-md",
              "border border-blue-200 bg-background px-3",
              "text-xs font-medium text-foreground",
              "transition-colors hover:bg-blue-50",
            )}
          >
            <Printer className="h-4 w-4" />
            Print Slip
          </button>
        </div>
      </section>

      {/* =========================================
          QUICK ACTIONS
      ========================================= */}
      <section className="rounded-lg border bg-background p-5">
        <h2 className="mb-4 text-sm font-semibold text-foreground">
          Quick Actions
        </h2>

        <div className="space-y-2">
          {quickActions.map((action) => {
            const Icon = action.icon;

            return (
              <button
                key={action.title}
                type="button"
                onClick={action.onClick}
                className="group flex w-full items-center gap-3 rounded-md text-left transition-colors hover:bg-muted/40"
              >
                {/* Icon */}
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-md",
                    action.iconClassName,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-semibold text-foreground">
                    {action.title}
                  </h3>

                  <p className="mt-0.5 text-[10px] text-muted-foreground">
                    {action.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ApplicationInfoPanel;
