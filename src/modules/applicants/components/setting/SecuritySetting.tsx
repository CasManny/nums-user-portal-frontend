import { KeyRound, ShieldCheck } from "lucide-react";

import CustomButton from "@/components/shared/CustomButton";
import { Input } from "@/components/ui/input";

const SecuritySettings = () => {
  return (
    <div className="rounded-lg border bg-background p-5">
      <div className="mb-6">
        <h2 className="text-sm font-semibold">Security</h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Manage your password and account security.
        </p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Change Password */}
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/5 text-primary">
              <KeyRound className="h-4 w-4" />
            </div>

            <div>
              <h3 className="text-xs font-semibold">Change Password</h3>

              <p className="text-[10px] text-muted-foreground">
                Update your password regularly to keep your account secure.
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <FormField label="Current Password">
              <Input type="password" className="h-9 text-xs" />
            </FormField>

            <FormField label="New Password">
              <Input type="password" className="h-9 text-xs" />
            </FormField>

            <FormField label="Confirm New Password">
              <Input type="password" className="h-9 text-xs" />
            </FormField>

            <div className="flex justify-end">
              <CustomButton className="w-fit">Update password</CustomButton>
            </div>
          </div>
        </div>

        {/* Security status */}
        <div className="flex items-start gap-3 rounded-lg border border-green-100 bg-green-50/40 p-4">
          <ShieldCheck className="h-5 w-5 text-green-600" />

          <div>
            <h3 className="text-xs font-semibold text-green-800">
              Your account is secure
            </h3>

            <p className="mt-1 text-[10px] text-green-700">
              Your account is protected with secure authentication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormField = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <label className="text-[10px] font-medium">{label}</label>

    {children}
  </div>
);

export default SecuritySettings;
