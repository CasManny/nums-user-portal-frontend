import UniversityLogo from "@/components/shared/UniversityLogo";
import { cn } from "@/lib/utils";
import { CheckCircle2, ShieldCheck } from "lucide-react";

interface ApplicationSlipData {
  applicationReference: string;
  fullName: string;
  dateOfBirth: string;
  emailAddress: string;
  phoneNumber: string;

  faculty: string;
  department: string;
  programme: string;
  degreeType: string;
  modeOfStudy: string;
  admissionYear: string;

  dateSubmitted: string;
  timeSubmitted: string;
  applicationStatus: "Submitted" | "Pending" | "Rejected";

  qrCodeUrl?: string;
}

interface ApplicationSlipProps {
  data?: ApplicationSlipData;
  logoSrc?: string;
}

const defaultData: ApplicationSlipData = {
  applicationReference: "NUEI-2026-000231",
  fullName: "Chukwu Sabastine",
  dateOfBirth: "15 March 2005",
  emailAddress: "chukwu.sabastine@example.com",
  phoneNumber: "+234 803 123 4567",

  faculty: "Faculty of Computing",
  department: "Computer Science",
  programme: "B.Sc. Computer Science",
  degreeType: "Bachelor's Degree",
  modeOfStudy: "Full Time",
  admissionYear: "2026/2027",

  dateSubmitted: "20 May 2026",
  timeSubmitted: "10:45 AM",
  applicationStatus: "Submitted",
};

const ApplicationSlip = ({ data = defaultData }: ApplicationSlipProps) => {
  const personalDetails = [
    {
      label: "Application Reference",
      value: data.applicationReference,
      highlight: true,
    },
    {
      label: "Full Name",
      value: data.fullName,
    },
    {
      label: "Date of Birth",
      value: data.dateOfBirth,
    },
    {
      label: "Email Address",
      value: data.emailAddress,
    },
    {
      label: "Phone Number",
      value: data.phoneNumber,
    },
  ];

  const academicDetails = [
    {
      label: "Faculty",
      value: data.faculty,
    },
    {
      label: "Department",
      value: data.department,
    },
    {
      label: "Programme",
      value: data.programme,
    },
    {
      label: "Degree Type",
      value: data.degreeType,
    },
    {
      label: "Mode of Study",
      value: data.modeOfStudy,
    },
    {
      label: "Admission Year",
      value: data.admissionYear,
    },
  ];

  return (
    <div className="space-y-4">
      {/* =========================================
          APPLICATION SLIP
      ========================================= */}
      <div className="rounded-xl border bg-background p-4 sm:p-6">
        <div className="rounded-lg border bg-white p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            {/* University Logo */}
            <UniversityLogo />
            {/* Admissions */}
            <div className="text-right">
              <h2 className="text-sm font-bold uppercase text-slate-900 sm:text-base">
                Office of Admissions
              </h2>

              <p className="mt-1 text-xs text-slate-700">
                Official Application Slip
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-5 border-t" />

          {/* Personal Details */}
          <div className="space-y-2">
            {personalDetails.map((item) => (
              <SlipRow
                key={item.label}
                label={item.label}
                value={item.value}
                highlight={item.highlight}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="my-4 border-t" />

          {/* Academic Details */}
          <div className="space-y-2">
            {academicDetails.map((item) => (
              <SlipRow key={item.label} label={item.label} value={item.value} />
            ))}
          </div>

          {/* Divider */}
          <div className="my-4 border-t" />

          {/* Submission Details + QR */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex-1 space-y-2">
              <SlipRow
                label="Date Submitted"
                value={
                  <>
                    {data.dateSubmitted}
                    <span className="mx-2">•</span>
                    {data.timeSubmitted}
                  </>
                }
              />

              <div className="grid grid-cols-[150px_20px_1fr] items-center text-xs">
                <span className="text-slate-700">Application Status</span>

                <span className="text-center">:</span>

                <span>
                  <StatusBadge status={data.applicationStatus} />
                </span>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex h-[90px] w-[90px] shrink-0 items-center justify-center rounded-lg border bg-white p-2">
              {data.qrCodeUrl ? (
                <img
                  src={data.qrCodeUrl}
                  alt="Application QR Code"
                  className="h-full w-full object-contain"
                />
              ) : (
                <QrPlaceholder />
              )}
            </div>
          </div>

          {/* Footer */}
          <p className="mt-5 text-[10px] text-slate-500">
            This is an official document. Please keep it safe for future
            reference.
          </p>
        </div>
      </div>

      {/* =========================================
          IMPORTANT NOTE
      ========================================= */}
      <div className="flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50/40 px-4 py-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

        <div className="text-xs leading-5 text-blue-900">
          <span className="font-semibold">Note:</span> Only one application is
          allowed per applicant for the 2026/2027 admission cycle.
          <br />
          Submitting multiple applications may result in disqualification.
        </div>
      </div>
    </div>
  );
};

/* =========================================
   SLIP ROW
========================================= */

interface SlipRowProps {
  label: string;
  value: React.ReactNode;
  highlight?: boolean;
}

const SlipRow = ({ label, value, highlight = false }: SlipRowProps) => {
  return (
    <div className="grid grid-cols-[150px_20px_1fr] items-center text-xs">
      <span className="text-slate-700">{label}</span>

      <span className="text-center text-slate-700">:</span>

      <span
        className={cn(
          "text-slate-700",
          highlight && "text-sm font-bold text-slate-900",
        )}
      >
        {value}
      </span>
    </div>
  );
};

/* =========================================
   STATUS BADGE
========================================= */

const StatusBadge = ({
  status,
}: {
  status: ApplicationSlipData["applicationStatus"];
}) => {
  const styles = {
    Submitted: "bg-green-50 text-green-700",
    Pending: "bg-orange-50 text-orange-700",
    Rejected: "bg-red-50 text-red-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-medium",
        styles[status],
      )}
    >
      <CheckCircle2 className="h-3 w-3" />
      {status}
    </span>
  );
};

/* =========================================
   QR PLACEHOLDER
========================================= */

const QrPlaceholder = () => {
  return (
    <div className="grid h-full w-full grid-cols-7 grid-rows-7 gap-[2px] opacity-90">
      {Array.from({ length: 49 }).map((_, index) => {
        const row = Math.floor(index / 7);
        const col = index % 7;

        const isCorner =
          (row < 3 && col < 3) || (row < 3 && col > 3) || (row > 3 && col < 3);

        const isPattern = isCorner || (index * 13 + row * 7 + col) % 5 === 0;

        return (
          <span
            key={index}
            className={cn(
              "rounded-[1px]",
              isPattern ? "bg-slate-900" : "bg-white",
            )}
          />
        );
      })}
    </div>
  );
};

export default ApplicationSlip;
