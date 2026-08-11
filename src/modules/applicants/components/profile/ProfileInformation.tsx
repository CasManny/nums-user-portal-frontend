import { useState } from "react";

import ProfileTabs, { PROFILE_TABS, type ProfileTabValue } from "./ProfileTabs";
import PersonalInformation from "./PersonalInformation";
import NextOfKin from "./NextOfKin";

const ProfileInformation = () => {
  const [activeTab, setActiveTab] = useState<ProfileTabValue>(
    PROFILE_TABS.PERSONAL,
  );

  return (
    <div className="rounded-lg border bg-background">
      {/* Tabs */}
      <ProfileTabs value={activeTab} onValueChange={setActiveTab} />

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === PROFILE_TABS.PERSONAL && <PersonalInformation />}
        {activeTab === PROFILE_TABS.NEXT_OF_KIN && <NextOfKin />}
      </div>
    </div>
  );
};

export default ProfileInformation;
