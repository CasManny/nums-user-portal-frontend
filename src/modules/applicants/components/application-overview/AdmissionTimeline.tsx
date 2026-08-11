import { Check } from "lucide-react";

interface TimelineItem {
  label: string;
  date?: string;
  status: "COMPLETED" | "CURRENT" | "PENDING";
}

const AdmissionTimeline = () => {
  const items: TimelineItem[] = [
    {
      label: "Account Created",
      date: "12 May 2026",
      status: "COMPLETED",
    },
    {
      label: "Application Submitted",
      date: "20 May 2026",
      status: "COMPLETED",
    },
    {
      label: "Document Verification",
      date: "25 May 2026",
      status: "COMPLETED",
    },
    {
      label: "Admission Review",
      date: "In Progress",
      status: "CURRENT",
    },
    {
      label: "Admission Decision",
      date: "Pending",
      status: "PENDING",
    },
  ];
  return (
    <div className="rounded-xl border bg-background p-5 shadow-sm">
      {/* Header */}
      <h3 className="text-sm font-semibold text-foreground">
        Admission Timeline
      </h3>

      {/* Timeline */}
      <div className="mt-5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div key={item.label} className="relative flex gap-3">
              {/* Timeline indicator */}
              <div className="relative flex w-4 shrink-0 justify-center">
                {item.status === "COMPLETED" ? (
                  <div className="z-10 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500">
                    <Check className="h-2.5 w-2.5 text-white" />
                  </div>
                ) : item.status === "CURRENT" ? (
                  <div className="z-10 h-4 w-4 rounded-full border-[4px] border-slate-200 bg-slate-900" />
                ) : (
                  <div className="z-10 h-4 w-4 rounded-full bg-slate-300" />
                )}

                {/* Connecting line */}
                {!isLast && (
                  <div
                    className={`absolute top-4 h-[calc(100%-4px)] w-px ${
                      item.status === "COMPLETED"
                        ? "bg-emerald-400"
                        : "bg-slate-200"
                    }`}
                  />
                )}
              </div>

              {/* Content */}
              <div
                className={`flex min-w-0 flex-1 justify-between gap-4 ${
                  isLast ? "pb-0" : "pb-4"
                }`}
              >
                <span
                  className={`text-xs ${
                    item.status === "CURRENT"
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>

                <span
                  className={`shrink-0 text-xs ${
                    item.status === "CURRENT"
                      ? "font-medium text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.date}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdmissionTimeline;
