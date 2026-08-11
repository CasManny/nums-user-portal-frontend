import { ApplicationBreadcrumb } from "@/components/shared/ApplicationBreadcrumb";
import ApplicantSettings from "../components/setting/ApplicantSetting";

const SettingsPage = () => {
  return (
    <div className="space-y-1 pb-8">
      <ApplicationBreadcrumb second="settings" title="Settings" />
      <ApplicantSettings />
    </div>
  );
};

export default SettingsPage;
