import { Camera } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomButton from "@/components/shared/CustomButton";

const ProfileSettings = () => {
  return (
    <div className="rounded-lg border bg-background p-5">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold">Profile Settings</h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Manage your personal information and how it appears in your account.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[130px_1fr]">
        {/* =========================================
            PROFILE IMAGE
        ========================================= */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <Avatar className="h-28 w-28">
              <AvatarImage src="/images/profile.jpg" alt="Chukwu Sabastine" />

              <AvatarFallback className="text-xl">CS</AvatarFallback>
            </Avatar>

            {/* Camera */}
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="
                absolute bottom-0 right-0
                h-8 w-8 rounded-full bg-background
                shadow-sm
              "
            >
              <Camera className="h-4 w-4" />

              <span className="sr-only">Change profile photo</span>
            </Button>
          </div>

          <p className="mt-3 text-center text-[9px] leading-4 text-muted-foreground">
            JPG, PNG or GIF. Max size 2MB.
          </p>
        </div>

        {/* =========================================
            FORM
        ========================================= */}
        <div className="space-y-4">
          {/* Row 1 */}
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label="Full Name">
              <Input defaultValue="Chukwu Sabastine" className="h-9 text-xs" />
            </FormField>

            <FormField label="Email Address">
              <Input
                type="email"
                defaultValue="chukwu.sabastine@example.com"
                className="h-9 text-xs"
              />
            </FormField>
          </div>

          {/* Row 2 */}
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label="Phone Number">
              <Input defaultValue="+234 803 123 4567" className="h-9 text-xs" />
            </FormField>

            <FormField label="Alternate Phone Number">
              <Input defaultValue="+234 901 234 5678" className="h-9 text-xs" />
            </FormField>
          </div>

          {/* Row 3 */}
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label="Date of Birth">
              <div className="relative">
                <Input
                  value={"Nigeria"}
                  className="w-full"
                  placeholder="27-08-2002"
                  disabled
                />
              </div>
            </FormField>

            <FormField label="Gender">
              <Input className="w-full" placeholder="Male" disabled />
            </FormField>
          </div>

          {/* Row 4 */}
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label="Nationality">
              <Input
                value={"Nigeria"}
                className="w-full"
                placeholder="Nigeria"
                disabled
              />
            </FormField>

            <FormField label="State of Origin">
              <Input
                value={"Enugu"}
                className="w-full"
                placeholder="Enugu"
                disabled
              />
            </FormField>
          </div>

          {/* Save */}
          <div className="flex justify-end pt-2">
            <CustomButton className="w-fit">Save changes</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================
   FORM FIELD
========================================= */

const FormField = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-medium text-foreground">{label}</label>

      {children}
    </div>
  );
};

export default ProfileSettings;
