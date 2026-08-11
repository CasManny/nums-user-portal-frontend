import {
  CheckCircle2,
  ChevronRight,
  FileText,
  GraduationCap,
  User,
} from "lucide-react";
import DocumentItem from "./DocumentItem";
import ReviewItem from "./ReviewItem";
import ReviewSection from "./ReviewSection";

interface ApplicationReviewProps {
  onEdit?: (section: string) => void;
  onSubmit?: () => void;
}

const ConfirmApplication = ({ onEdit, onSubmit }: ApplicationReviewProps) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-foreground">
          Review Your Application
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Please carefully review the information you have provided before
          submitting your application.
        </p>
      </div>

      {/* Application Status */}
      <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
        <CheckCircle2 className="h-5 w-5 text-green-600" />

        <div>
          <p className="text-sm font-medium text-green-900">
            Application Ready for Submission
          </p>

          <p className="text-xs text-green-700">
            All required sections have been completed.
          </p>
        </div>
      </div>

      {/* Personal Information */}
      <ReviewSection
        title="Personal Information"
        description="Your personal and contact information"
        icon={<User className="h-5 w-5" />}
        onEdit={() => onEdit?.("personal")}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          <ReviewItem label="Full Name" value="John Doe" />

          <ReviewItem label="Email Address" value="johndoe@example.com" />

          <ReviewItem label="Phone Number" value="08012345678" />

          <ReviewItem label="Gender" value="Male" />

          <ReviewItem label="Date of Birth" value="15 March 2005" />

          <ReviewItem label="Nationality" value="Nigerian" />

          <ReviewItem label="State of Origin" value="Enugu" />

          <ReviewItem label="Local Government Area" value="Nsukka" />
        </div>
      </ReviewSection>

      {/* Academic Information */}
      <ReviewSection
        title="Academic Information"
        description="Your educational background and examination information"
        icon={<GraduationCap className="h-5 w-5" />}
        onEdit={() => onEdit?.("academic")}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          <ReviewItem label="Admission Year" value="2026/2027" />

          <ReviewItem label="Examination Type" value="UTME" />

          <ReviewItem label="JAMB Registration Number" value="12345678AB" />

          <ReviewItem label="Certificate Type" value="WAEC" />

          <ReviewItem
            label="Secondary School"
            value="Community Secondary School, Enugu"
          />

          <ReviewItem label="Year of Graduation" value="2025" />
        </div>
      </ReviewSection>

      {/* Programme Choice */}
      <ReviewSection
        title="Programme Choice"
        description="Your selected faculty, department and programme"
        icon={<GraduationCap className="h-5 w-5" />}
        onEdit={() => onEdit?.("programme")}
      >
        <div className="rounded-lg border bg-muted/20 p-4">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <ReviewItem label="Faculty" value="Faculty of Computing" />

            <ReviewItem label="Department" value="Computer Science" />

            <ReviewItem label="Programme" value="B.Sc. Computer Science" />

            <ReviewItem label="Degree Type" value="Bachelor's Degree" />

            <ReviewItem label="Mode of Study" value="Full Time" />
          </div>
        </div>
      </ReviewSection>

      {/* Documents */}
      <ReviewSection
        title="Uploaded Documents"
        description="Documents submitted with your application"
        icon={<FileText className="h-5 w-5" />}
        onEdit={() => onEdit?.("documents")}
      >
        <div className="divide-y rounded-lg border">
          <DocumentItem
            name="Passport Photograph"
            fileName="passport-photo.jpg"
          />

          <DocumentItem
            name="JAMB Result Slip"
            fileName="jamb-result-2026.pdf"
          />

          <DocumentItem name="O'Level Result" fileName="waec-result.pdf" />

          <DocumentItem
            name="Birth Certificate / Declaration of Age"
            fileName="birth-certificate.pdf"
          />

          <DocumentItem name="Identification" fileName="national-id.pdf" />
        </div>
      </ReviewSection>

      {/* Declaration */}
      <div className="rounded-lg border bg-muted/20 p-5">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-gray-300"
          />

          <span className="text-sm leading-6 text-muted-foreground">
            I confirm that the information provided in this application is
            accurate and complete to the best of my knowledge. I understand that
            providing false or misleading information may result in the
            cancellation of my application.
          </span>
        </label>
      </div>

      {/* Final Actions */}
      <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => onEdit?.("personal")}
          className="rounded-md border px-6 py-2.5 text-sm font-medium transition hover:bg-muted"
        >
          Go Back & Edit
        </button>

        <button
          type="button"
          onClick={onSubmit}
          className="flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Submit Application
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ConfirmApplication;
