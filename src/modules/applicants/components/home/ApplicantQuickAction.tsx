import {
  ArrowRight,
  FileDown,
  FileText,
  Upload,
  UserRound
} from "lucide-react";

interface QuickAction {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconClassName: string;
  href?: string;
}

const quickActions: QuickAction[] = [
  {
    title: "Continue Application",
    description: "Complete your application where you stopped.",
    icon: <FileText className="h-6 w-6" />,
    iconClassName: "bg-blue-50 text-blue-600",
  },
  {
    title: "Upload Documents",
    description: "Upload or manage your supporting documents.",
    icon: <Upload className="h-6 w-6" />,
    iconClassName: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Download Application Slip",
    description: "Download your application slip/acknowledgement.",
    icon: <FileDown className="h-6 w-6" />,
    iconClassName: "bg-amber-50 text-amber-600",
  },
  {
    title: "Edit Profile",
    description: "Update your personal information.",
    icon: <UserRound className="h-6 w-6" />,
    iconClassName: "bg-purple-50 text-purple-600",
  },
];

const ApplicantQuickActions = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-[2fr_1.15fr]">
      {/* Quick Actions */}
      <div className="rounded-xl border bg-background p-4 shadow-sm">
        <h2 className="mb-3 text-sm font-semibold">Quick Actions</h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((action) => (
            <button
              key={action.title}
              type="button"
              className="group flex min-h-[143px] flex-col rounded-lg border bg-background p-3 text-left transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-sm"
            >
              {/* Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg ${action.iconClassName}`}
              >
                {action.icon}
              </div>

              {/* Content */}
              <div className="mt-3 flex-1">
                <h3 className="text-xs font-semibold">{action.title}</h3>

                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                  {action.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="mt-2 flex justify-end">
                <ArrowRight className="h-4 w-4 text-foreground transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming Deadline */}
      <UpcomingDeadline
        title="Admission Deadline"
        date="31 August 2026"
        daysRemaining={18}
      />
    </div>
  );
};

interface UpcomingDeadlineProps {
  title: string;
  date: string;
  daysRemaining: number;
}

const UpcomingDeadline = ({
  title,
  date,
  daysRemaining,
}: UpcomingDeadlineProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-background p-5 shadow-sm">
      <div className="relative z-10">
        <h2 className="text-sm font-semibold">Upcoming Deadline</h2>

        <div className="mt-8">
          <p className="text-xs text-muted-foreground">{title}</p>

          <p className="mt-1 text-lg font-bold tracking-tight">{date}</p>

          <div className="mt-4 flex w-fit items-center gap-2 rounded-lg bg-amber-50 px-3 py-2.5">
            <span className="text-sm font-semibold text-amber-600">
              {daysRemaining}
            </span>

            <span className="text-xs font-medium text-amber-600">
              Days Remaining
            </span>
          </div>
        </div>
      </div>

      {/* Calendar illustration */}
      <div className="absolute right-5 top-8 hidden sm:block">
        <div className="relative h-20 w-20 rounded-xl border bg-slate-50 shadow-sm">
          {/* Calendar header */}
          <div className="absolute left-0 top-0 h-7 w-full rounded-t-xl bg-slate-800" />

          {/* Calendar rings */}
          <div className="absolute -top-2 left-4 h-5 w-2 rounded-full border-2 border-slate-300 bg-white" />
          <div className="absolute -top-2 right-4 h-5 w-2 rounded-full border-2 border-slate-300 bg-white" />

          {/* Calendar grid */}
          <div className="absolute inset-x-3 bottom-3 top-10 grid grid-cols-3 gap-1.5">
            <span className="rounded-sm bg-slate-200" />
            <span className="rounded-sm bg-slate-200" />
            <span className="rounded-sm bg-slate-200" />
            <span className="rounded-sm bg-slate-200" />
            <span className="rounded-sm bg-slate-200" />
            <span className="rounded-sm bg-slate-200" />
            <span className="rounded-sm bg-slate-200" />
            <span className="rounded-sm bg-slate-200" />
            <span className="rounded-sm bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantQuickActions;
