import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router";
import { useNavigate } from "react-router";

import { LoginUserSchema, type LoginUserType } from "../schemas";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import CustomButton from "@/components/shared/CustomButton";

const LoginForm = () => {
  const navigate = useNavigate();
  const form = useForm<LoginUserType>({
    resolver: zodResolver(LoginUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginUserType) => {
    console.log("Login Data:", data);
    navigate("/applicants");
  };

  return (
    <div className="w-full p-6">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="space-y-4">
          {/* Email */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  autoComplete="email"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Password */}
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="password">Password</FieldLabel>

                  <Link
                    to="/auth/forgot-password"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Input
                  {...field}
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Submit */}
          <div className="space-y-3 pt-2">
            <CustomButton variant={"primary"}>Sign In</CustomButton>

            <p className="text-center text-sm text-muted-foreground">
              New applicant?{" "}
              <Link
                to="/auth/register"
                className="font-medium text-primary hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
};

export default LoginForm;
