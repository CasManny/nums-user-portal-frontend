import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import {
  personalDetailsSchema,
  type PersonalDetailsFormType,
} from "@/modules/applicants/schemas";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";

interface Props {
  onSuccess: () => void;
}

const PersonalDetailsForm = ({ onSuccess }: Props) => {
  const form = useForm<PersonalDetailsFormType>({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phonenumber: "",
      gender: "MALE",
      dateOfBirth: "",
      nationality: "",
      stateOfOrigin: "",
      lga: "",
    },
  });

  const onSubmit = (data: PersonalDetailsFormType) => {
    onSuccess();
    console.log(data);
    
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white p-5">
      <FieldGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Full Name */}
        <Controller
          name="fullname"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="fullname">Full Name</FieldLabel>

              <Input
                {...field}
                id="fullname"
                placeholder="John Doe"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
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
                placeholder="johndoe@example.com"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Phone Number */}
        <Controller
          name="phonenumber"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="phonenumber">Phone Number</FieldLabel>

              <Input
                {...field}
                id="phonenumber"
                placeholder="08012345678"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Gender */}
        <Controller
          name="gender"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="gender">Gender</FieldLabel>

              <select
                {...field}
                id="gender"
                className="flex h-10 w-full rounded-md border bg-background px-3 text-sm"
              >
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Date of Birth */}
        <Controller
          name="dateOfBirth"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="dateOfBirth">Date of Birth</FieldLabel>

              <Input
                {...field}
                id="dateOfBirth"
                type="date"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Nationality */}
        <Controller
          name="nationality"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="nationality">Nationality</FieldLabel>

              <Input
                {...field}
                id="nationality"
                placeholder="Nigerian"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* State of Origin */}
        <Controller
          name="stateOfOrigin"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="stateOfOrigin">State of Origin</FieldLabel>

              <Input
                {...field}
                id="stateOfOrigin"
                placeholder="Enugu"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* LGA */}
        <Controller
          name="lga"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="lga">Local Government Area</FieldLabel>

              <Input
                {...field}
                id="lga"
                placeholder="Nsukka"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="rounded-md bg-primary px-6 py-2 text-primary-foreground"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default PersonalDetailsForm;
