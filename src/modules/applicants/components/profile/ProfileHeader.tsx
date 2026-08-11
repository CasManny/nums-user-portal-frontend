import {
  CalendarDays,
  Camera,
  Flag,
  Mail,
  Phone,
  User,
  UserRound,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface UserProfile {
  fullName: string;
  email: string;
  phoneNumber: string;
  applicationReference: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  profileImage?: string;
  status?: string;
}

interface ProfileHeaderProps {
  user?: UserProfile;
  onProfileImageChange?: () => void;
}

const defaultUser: UserProfile = {
  fullName: "Chukwu Sabastine",
  email: "chukwu.sabastine@example.com",
  phoneNumber: "+234 803 123 4567",
  applicationReference: "NUEI-2026-000231",
  dateOfBirth: "15 March 2005",
  gender: "Male",
  nationality: "Nigerian",
  profileImage: "",
  status: "Applicant",
};

const ProfileHeader = ({
  user = defaultUser,
  onProfileImageChange,
}: ProfileHeaderProps) => {
  return (
    <div className="rounded-lg border bg-background px-5 py-4">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        {/* =========================================
            PROFILE
        ========================================= */}
        <div className="flex min-w-0 items-center gap-4 lg:w-[42%]">
          {/* Avatar */}
          <div className="relative shrink-0">
            <Avatar className="h-20 w-20 border-2 border-background shadow-sm">
              <AvatarImage src={user.profileImage} alt={user.fullName} />

              <AvatarFallback className="bg-muted text-lg font-semibold">
                {getInitials(user.fullName)}
              </AvatarFallback>
            </Avatar>

            {/* Camera button */}
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={onProfileImageChange}
              className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-background shadow-sm"
            >
              <Camera className="h-3.5 w-3.5" />

              <span className="sr-only">Change profile picture</span>
            </Button>
          </div>

          {/* Name + contact */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="truncate text-base font-bold text-foreground">
                {user.fullName}
              </h1>

              {user.status && (
                <Badge
                  variant="secondary"
                  className="bg-green-50 px-2 py-0.5 text-[9px] font-medium text-green-700 hover:bg-green-50"
                >
                  {user.status}
                </Badge>
              )}
            </div>

            <div className="mt-2 space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{user.email}</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Phone className="h-3.5 w-3.5 shrink-0" />
                <span>{user.phoneNumber}</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            USER INFORMATION
        ========================================= */}
        <div className="grid flex-1 grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <ProfileInfo
            icon={<UserRound className="h-3.5 w-3.5" />}
            label="Application Reference"
            value={user.applicationReference}
          />

          <ProfileInfo
            icon={<CalendarDays className="h-3.5 w-3.5" />}
            label="Date of Birth"
            value={user.dateOfBirth}
          />

          <ProfileInfo
            icon={<User className="h-3.5 w-3.5" />}
            label="Gender"
            value={user.gender}
          />

          <ProfileInfo
            icon={<Flag className="h-3.5 w-3.5" />}
            label="Nationality"
            value={user.nationality}
          />
        </div>
      </div>
    </div>
  );
};

/* =========================================
   PROFILE INFO
========================================= */

interface ProfileInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const ProfileInfo = ({ icon, label, value }: ProfileInfoProps) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center",
          "rounded-md bg-primary/5 text-primary",
        )}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[9px] font-medium text-muted-foreground">{label}</p>

        <p className="truncate text-[11px] font-semibold text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
};

/* =========================================
   INITIALS
========================================= */

const getInitials = (name: string) => {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};

export default ProfileHeader;
