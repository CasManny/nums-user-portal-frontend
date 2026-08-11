import { useState } from "react";

import { Tabs } from "@/components/ui/tabs";
import SettingsTabs, {
  SETTINGS_TABS,
  type SettingsTabValue,
} from "./SettingTabs";
import ProfileSettings from "./ProfileSetting";
import SecuritySettings from "./SecuritySetting";

const ApplicantSettings = () => {
  const [activeTab, setActiveTab] = useState<SettingsTabValue>(
    SETTINGS_TABS.PROFILE,
  );

  return (
    <div className="space-y-4">
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as SettingsTabValue)}
        className="w-full"
      >
        <SettingsTabs onValueChange={setActiveTab} />
        <div className="mt-4">
          {activeTab === SETTINGS_TABS.PROFILE && <ProfileSettings />}

          {activeTab === SETTINGS_TABS.SECURITY && <SecuritySettings />}
        </div>
      </Tabs>
    </div>
  );
};

export default ApplicantSettings;
