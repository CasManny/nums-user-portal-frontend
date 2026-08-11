import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { RegisterUserSchema, type RegisterUserType } from "../schemas";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router";
import CustomButton from "@/components/shared/CustomButton";

const RegisterForm = () => {
  const navigate = useNavigate();
  const form = useForm<RegisterUserType>({
    resolver: zodResolver(RegisterUserSchema),
    defaultValues: {
      email: "",
      password: "",
      phoneNumber: "",
      fullName: "",
      gender: "M",
      address: "",
      dateOfBirth: undefined,
    },
  });

  const onSubmit = (data: RegisterUserType) => {
    console.log("Form Data Submitted:", data);
    navigate("/applicants");
  };

  return (
    <div className="w-full p-6">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="space-y-2">
          {/* Full Name */}
          <Controller
            name="fullName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                <Input
                  {...field}
                  id="fullName"
                  aria-invalid={fieldState.invalid}
                  placeholder="John Doe"
                  autoComplete="name"
                />
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

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
                  aria-invalid={fieldState.invalid}
                  placeholder="johndoe@example.com"
                  autoComplete="email"
                />
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Password */}
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  {...field}
                  id="password"
                  type="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="••••••••"
                  autoComplete="new-password"
                />
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Phone Number */}
          <Controller
            name="phoneNumber"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>
                <Input
                  {...field}
                  id="phoneNumber"
                  type="tel"
                  aria-invalid={fieldState.invalid}
                  placeholder="+1234567890"
                  autoComplete="tel"
                />
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Date of Birth */}
          <Controller
            name="dateOfBirth"
            control={form.control}
            render={({
              field: { value, onChange, ...restField },
              fieldState,
            }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="dateOfBirth">Date of Birth</FieldLabel>
                <Input
                  {...restField}
                  id="dateOfBirth"
                  type="date"
                  aria-invalid={fieldState.invalid}
                  value={value}
                  onChange={onChange}
                />
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Gender Select */}
          <Controller
            name="gender"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="gender">Gender</FieldLabel>
                {/* Fallback standard select component styled cleanly; replace with custom Select if available */}
                <select
                  {...field}
                  id="gender"
                  aria-invalid={fieldState.invalid}
                  className="w-full h-10 px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Address */}
          <Controller
            name="address"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="address">Address</FieldLabel>
                <Input
                  {...field}
                  id="address"
                  aria-invalid={fieldState.invalid}
                  placeholder="123 Main St, City, Country"
                  autoComplete="street-address"
                />
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Submit Button */}
          <div className="w-full space-y-2">
            <CustomButton variant={"primary"}>Sign In</CustomButton>
            <p className="mb-6 text-sm text-center text-muted-foreground">
              Already have a university account?{" "}
              <Link
                to="/auth/login"
                className="font-medium text-primary hover:underline"
              >
                Login here
              </Link>
            </p>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
};

export default RegisterForm;
