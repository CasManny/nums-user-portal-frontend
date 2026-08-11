/* eslint-disable react-refresh/only-export-components */

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PROFILE_TABS = {
  PERSONAL: "personal",
  NEXT_OF_KIN: "next-of-kin",
} as const;

export type ProfileTabValue = (typeof PROFILE_TABS)[keyof typeof PROFILE_TABS];

interface ProfileTabsProps {
  value: ProfileTabValue;
  onValueChange: (value: ProfileTabValue) => void;
}

const ProfileTabs = ({ value, onValueChange }: ProfileTabsProps) => {
  return (
    <Tabs
      value={value}
      onValueChange={(value) => onValueChange(value as ProfileTabValue)}
      className="w-full"
    >
      <TabsList className="h-9 w-full justify-start rounded-none border-b bg-transparent p-0">
        <TabsTrigger
          value={PROFILE_TABS.PERSONAL}
          className="
             gap-2 rounded-none border
          px-5 text-xs font-medium text-muted-foreground
           data-active:text-nexus-primary
          data-active:border-nexus-primary
          "
        >
          Personal Information
        </TabsTrigger>

        <TabsTrigger
          value={PROFILE_TABS.NEXT_OF_KIN}
          className="
             gap-2 rounded-none border
          px-5 text-xs font-medium text-muted-foreground
           data-active:text-nexus-primary
          data-active:border-nexus-primary
          "
        >
          Next of Kin
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ProfileTabs;
