import type { UserType } from "@/types";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

interface UserProfileProps {
  name: string;
  userType: UserType;
  avatarUrl?: string;
}

const UserProfile = ({ name, userType, avatarUrl }: UserProfileProps) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const formattedUserType =
    userType.charAt(0) + userType.slice(1).toLowerCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="ghost"
          className="h-auto gap-3 px-2 py-1.5 hover:bg-muted"
        >
          <Avatar className="h-9 w-9">
            <AvatarImage src={avatarUrl} alt={name} />

            <AvatarFallback className="bg-primary text-primary-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="hidden flex-col items-start sm:flex">
            <span className="text-sm font-medium leading-tight">{name}</span>

            <span className="text-xs text-muted-foreground">
              {formattedUserType}
            </span>
          </div>

          <ChevronDown className="ml-1 h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        {/* User information */}
        <div className="px-2 py-2">
          <p className="text-sm font-medium">{name}</p>

          <p className="text-xs text-muted-foreground">{formattedUserType}</p>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <User />
          <span>My Profile</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Settings />
          <span>Settings</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-destructive focus:text-destructive">
          <LogOut />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
