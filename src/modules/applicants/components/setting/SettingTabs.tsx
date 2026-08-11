/* eslint-disable react-refresh/only-export-components */

import { LockKeyhole, UserRound } from "lucide-react";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SETTINGS_TABS = {
  PROFILE: "profile",
  SECURITY: "security",
} as const;

export type SettingsTabValue =
  (typeof SETTINGS_TABS)[keyof typeof SETTINGS_TABS];

interface SettingsTabsProps {
  onValueChange: (value: SettingsTabValue) => void;
}

const SettingsTabs = ({ onValueChange }: SettingsTabsProps) => {
  return (
    <TabsList className="h-12 w-full justify-start rounded-none border-b bg-background p-0">
      <TabsTrigger
        value={SETTINGS_TABS.PROFILE}
        onClick={() => onValueChange(SETTINGS_TABS.PROFILE)}
        className="
          gap-2 rounded-none border
          px-5 text-xs font-medium text-muted-foreground
           data-active:text-nexus-primary
          data-active:border-nexus-primary
        "
      >
        <UserRound className="h-4 w-4" />
        Profile Settings
      </TabsTrigger>

      <TabsTrigger
        value={SETTINGS_TABS.SECURITY}
        onClick={() => onValueChange(SETTINGS_TABS.SECURITY)}
        className="
          gap-2 rounded-none border
          px-5 text-xs font-medium text-muted-foreground
          data-active:text-nexus-primary
          data-active:border-nexus-primary
        "
      >
        <LockKeyhole className="h-4 w-4" />
        Security
      </TabsTrigger>
    </TabsList>
  );
};

export default SettingsTabs;
