import {
  Building2,
  CalendarDays,
  Mail,
  Phone,
  SquareUserRound,
} from "lucide-react";
import ApplicationReference from "./ApplicationReference";

interface ApplicantWelcomeProps {
  name: string;
  applicationReference: string;
  programme: string;
  faculty: string;
  email: string;
  phone: string;
  avatarUrl?: string;
}

const ApplicantWelcome = ({
  name,
  programme,
  faculty,
  email,
  phone,
  avatarUrl,
}: ApplicantWelcomeProps) => {
  return (
    <section className="flex flex-col gap-6 rounded-2xl border bg-background p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Welcome section */}
      <div className="space-y-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Good Morning, {name.split(" ")[0]} 👋
          </h1>

          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            Welcome to the Nexus University Admission Portal.
          </p>
        </div>

        <ApplicationReference reference="NUEI-2026-000231" />
      </div>

      {/* Applicant information */}
      <div className="flex w-full items-center gap-5 rounded-xl border bg-card p-4 lg:max-w-[560px]">
        {/* Avatar */}
        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-muted">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-muted-foreground">
              <SquareUserRound className="size-10" />
            </div>
          )}
        </div>

        {/* Details */}
        <div className="grid flex-1 grid-cols-1 gap-y-1">
          <InfoItem
            icon={<CalendarDays />}
            label="Programme"
            value={programme}
          />

          <InfoItem icon={<Building2 />} label="Faculty" value={faculty} />

          <InfoItem icon={<Mail />} label="Email" value={email} />

          <InfoItem icon={<Phone />} label="Phone" value={phone} />
        </div>
      </div>
    </section>
  );
};

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoItem = ({ icon, label, value }: InfoItemProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center flex-[30%]">
        <div className="mt-0.5 text-muted-foreground [&_svg]:h-4 [&_svg]:w-4">
          {icon}
        </div>
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
      </div>

      <p
        className="truncate text-sm font-medium text-left flex-[70%]"
        title={value}
      >
        {value}
      </p>
    </div>
  );
};

export default ApplicantWelcome;
