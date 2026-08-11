import { ApplicationBreadcrumb } from "@/components/shared/ApplicationBreadcrumb";
import CustomButton from "@/components/shared/CustomButton";
import { Pencil } from "lucide-react";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileInformation from "../components/profile/ProfileInformation";
import ProfileSidebar from "../components/profile/ProfileSidebar";

const ProfilePage = () => {
  return (
    <div className="space-y-1 pb-8">
      <div className="flex items-center justify-between">
        <ApplicationBreadcrumb second="profile" title="My Profile" />
        <CustomButton className="w-fit flex gap-2 items-center">
          <Pencil className="size-3" /> Edit Profile
        </CustomButton>
      </div>
      <ProfileHeader />
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <ProfileInformation />
        </div>
        <div className="">
          <ProfileSidebar />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
