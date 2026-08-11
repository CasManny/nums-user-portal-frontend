import { Bell, Search } from "lucide-react";

import { Input } from "../ui/input";
import UserProfile from "./UserProfile";

const ApplicationNavbar = () => {
  return (
    <header className="flex h-16 items-center justify-between print:hidden border-b bg-background px-4 md:px-6">
      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          placeholder="Search anything..."
          className="h-10 bg-muted/40 pl-9 pr-4"
        />
      </div>

      {/* Right actions */}
      <div className="ml-4 flex items-center gap-2">
        {/* Notifications */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />

          {/* Notification indicator */}
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-nexus-accent ring-2 ring-background" />
        </button>

        {/* User profile */}
        <UserProfile userType="APPLICANT" name="Chukw Sabastine" />
      </div>
    </header>
  );
};

export default ApplicationNavbar;
