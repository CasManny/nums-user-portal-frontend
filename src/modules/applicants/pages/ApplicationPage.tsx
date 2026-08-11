import { useState } from "react";
import { BookOpen, FileText, GraduationCap, User } from "lucide-react";

import { ApplicationBreadcrumb } from "../../../components/shared/ApplicationBreadcrumb";
import ApplicationFormStepper from "../components/application/ApplicationFormStepper";
import ConfirmApplication from "../components/application/confirm-application";
import AcademicInformationForm from "../components/application/form/AcademicInformationForm";
import DocumentsForm from "../components/application/form/DocumentsForm";
import PersonalDetailsForm from "../components/application/form/PersonalDetailsForm";
import ProgramChoiceForm from "../components/application/form/ProgramChoiceForm";
import CustomCollapsible from "@/components/shared/CustomCollapsible";
import ApplicationSummary from "../components/application/ApplicationSummary";

const ApplicationPage = () => {
  const [openSection, setOpenSection] = useState("personal");

  const [completedSections, setCompletedSections] = useState<string[]>([]);

  const completeSection = (currentSection: string, nextSection: string) => {
    setCompletedSections((prev) => [...prev, currentSection]);
    setOpenSection(nextSection);
  };

  return (
    <div className="space-y-1 pb-10">
      <ApplicationBreadcrumb
        title="New Application"
        second="Application"
        third="New Application"
      />
      <ApplicationFormStepper />
      <div className="grid grid-cols-3 gap-5 relative">
        {/* Application */}
        <div className="col-span-2 space-y-2">
          {/* 1. Personal Details */}
          <CustomCollapsible
            title="1. Personal Details"
            icon={<User className="h-5 w-5" />}
            open={openSection === "personal"}
            disabled={false}
            setOpenChange={(open) => {
              if (open) {
                setOpenSection("personal");
              }
            }}
          >
            <PersonalDetailsForm
              onSuccess={() => completeSection("personal", "academic")}
            />
          </CustomCollapsible>

          {/* 2. Academic Information */}
          <CustomCollapsible
            title="2. Academic Information"
            icon={<GraduationCap className="h-5 w-5" />}
            open={openSection === "academic"}
            disabled={!completedSections.includes("personal")}
            setOpenChange={(open) => {
              if (open && completedSections.includes("personal")) {
                setOpenSection("academic");
              }
            }}
          >
            <AcademicInformationForm
              onSuccess={() => completeSection("academic", "program")}
            />
          </CustomCollapsible>

          {/* 3. Program Choice */}
          <CustomCollapsible
            title="3. Program Choice"
            icon={<BookOpen className="h-5 w-5" />}
            open={openSection === "program"}
            disabled={!completedSections.includes("academic")}
            setOpenChange={(open) => {
              if (open && completedSections.includes("academic")) {
                setOpenSection("program");
              }
            }}
          >
            <ProgramChoiceForm
              onSuccess={() => completeSection("program", "documents")}
            />
          </CustomCollapsible>

          {/* 4. Documents */}
          <CustomCollapsible
            title="4. Documents"
            icon={<FileText className="h-5 w-5" />}
            open={openSection === "documents"}
            disabled={!completedSections.includes("program")}
            setOpenChange={(open) => {
              if (open && completedSections.includes("program")) {
                setOpenSection("documents");
              }
            }}
          >
            <DocumentsForm
              onSuccess={() => completeSection("documents", "review")}
            />
          </CustomCollapsible>

          {/* 5. Review */}
          <CustomCollapsible
            title="5. Review & Submit"
            icon={<FileText className="h-5 w-5" />}
            open={openSection === "review"}
            disabled={!completedSections.includes("documents")}
            setOpenChange={(open) => {
              if (open && completedSections.includes("documents")) {
                setOpenSection("review");
              }
            }}
          >
            <ConfirmApplication />
          </CustomCollapsible>
        </div>

        {/* Right side */}
        <div className="sticky top-6 self-start lg:col-span-1">
          <ApplicationSummary />
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
