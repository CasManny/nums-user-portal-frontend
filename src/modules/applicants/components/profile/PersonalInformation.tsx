import { ShieldCheck } from "lucide-react";

interface PersonalInformationProps {
  data?: {
    fullName: string;
    dateOfBirth: string;
    gender: string;
    maritalStatus: string;
    nationality: string;
    stateOfOrigin: string;
    localGovernmentArea: string;
    religion: string;

    placeOfBirth: string;
    bloodGroup: string;
    disabilityStatus: string;
    religionDenomination: string;
    motherTongue: string;
    hobbies: string;
    languages: string;
  };
}

const defaultData = {
  fullName: "Chukwu Sabastine",
  dateOfBirth: "15 March 2005",
  gender: "Male",
  maritalStatus: "Single",
  nationality: "Nigerian",
  stateOfOrigin: "Enugu",
  localGovernmentArea: "Nsukka",
  religion: "Christianity",

  placeOfBirth: "Enugu, Enugu State",
  bloodGroup: "O+",
  disabilityStatus: "None",
  religionDenomination: "Catholic",
  motherTongue: "Igbo",
  hobbies: "Reading, Coding, Music",
  languages: "English, Igbo",
};

const PersonalInformation = ({
  data = defaultData,
}: PersonalInformationProps) => {
  const leftColumn = [
    ["Full Name", data.fullName],
    ["Date of Birth", data.dateOfBirth],
    ["Gender", data.gender],
    ["Marital Status", data.maritalStatus],
    ["Nationality", data.nationality],
    ["State of Origin", data.stateOfOrigin],
    ["Local Government Area", data.localGovernmentArea],
    ["Religion", data.religion],
  ];

  const rightColumn = [
    ["Place of Birth", data.placeOfBirth],
    ["Blood Group", data.bloodGroup],
    ["Disability Status", data.disabilityStatus],
    ["Religion Denomination", data.religionDenomination],
    ["Mother Tongue", data.motherTongue],
    ["Hobbies", data.hobbies],
    ["Languages", data.languages],
  ];

  return (
    <div className="space-y-4">
      {/* Information */}
      <div className="rounded-lg border bg-background p-4">
        <h2 className="mb-4 text-xs font-semibold text-foreground">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
          <div>
            {leftColumn.map(([label, value]) => (
              <InformationRow key={label} label={label} value={value} />
            ))}
          </div>

          <div>
            {rightColumn.map(([label, value]) => (
              <InformationRow key={label} label={label} value={value} />
            ))}
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50/40 p-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-100 text-blue-700">
          <ShieldCheck className="h-4 w-4" />
        </div>

        <div>
          <h3 className="text-[10px] font-semibold text-blue-800">
            Your Information is Secure
          </h3>

          <p className="mt-0.5 text-[9px] leading-4 text-blue-700">
            We are committed to protecting your personal information.
            <br />
            Your data is encrypted and securely stored.
          </p>
        </div>
      </div>
    </div>
  );
};

interface InformationRowProps {
  label: string;
  value: string;
}

const InformationRow = ({ label, value }: InformationRowProps) => {
  return (
    <div className="grid min-h-[27px] grid-cols-[105px_1fr] items-center border-b last:border-b-0">
      <span className="text-[9px] font-medium text-muted-foreground">
        {label}
      </span>

      <span className="text-xs font-semibold text-foreground">{value}</span>
    </div>
  );
};

export default PersonalInformation;
