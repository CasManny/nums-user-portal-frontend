import type { UserType } from "@/types";
import { ArrowRight, GraduationCap } from "lucide-react";
import CustomButton from "./CustomButton";

interface NeedHelpProps {
  userType: UserType;
}

const NeedHelp = ({ userType }: NeedHelpProps) => {
  const infoText =
    userType === "APPLICANT"
      ? "Check our admission guidelines or contact our support team."
      : "Visit the help center or contact our support team.";

  return (
    <div className="rounded-2xl p-3 shadow-sm bg-nexus-primary text-white">
      <div className="flex flex-col gap-1">
        {userType === "APPLICANT" && (
          <GraduationCap className="size-8 text-nexus-accent" />
        )}

        {/* Content */}
        <div className="space-y-1">
          <h3 className="text-sm font-semibold tracking-tight">Need Help?</h3>

          <p className="max-w-sm text-xs text-gray-400 font-semibold">
            {infoText}
          </p>
        </div>

        {/* Action */}
        <CustomButton variant="secondary">
          <span>Get Help</span>
          <ArrowRight className="h-4 w-4" />
        </CustomButton>
      </div>
    </div>
  );
};

export default NeedHelp;
