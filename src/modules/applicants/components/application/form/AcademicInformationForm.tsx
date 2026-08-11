import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import {
  academicInformationSchema,
  type AcademicInformationFormType,
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

const AcademicInformationForm = ({ onSuccess }: Props) => {
  const form = useForm<AcademicInformationFormType>({
    resolver: zodResolver(academicInformationSchema),
    defaultValues: {
      admissionYear: "",
      examType: "UTME",
      jambRegistrationNumber: "",
      schoolName: "",
      yearOfGraduation: "",
      certificateType: "",
      previousProgramme: "",
    },
  });

  const onSubmit = (data: AcademicInformationFormType) => {
    onSuccess();
    console.log(data);
  };

  return (
    <div className="bg-white p-5">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Admission Year */}
          <Controller
            name="admissionYear"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="admissionYear">Admission Year</FieldLabel>

                <select
                  {...field}
                  id="admissionYear"
                  className="flex h-10 w-full rounded-md border bg-background px-3 text-sm"
                  aria-invalid={fieldState.invalid}
                >
                  <option value="">Select admission year</option>
                  <option value="2026/2027">2026/2027</option>
                  <option value="2027/2028">2027/2028</option>
                  <option value="2028/2029">2028/2029</option>
                </select>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Examination Type */}
          <Controller
            name="examType"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="examType">Examination Type</FieldLabel>

                <select
                  {...field}
                  id="examType"
                  className="flex h-10 w-full rounded-md border bg-background px-3 text-sm"
                  aria-invalid={fieldState.invalid}
                >
                  <option value="UTME">UTME</option>
                  <option value="DIRECT_ENTRY">Direct Entry</option>
                </select>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* JAMB Registration Number */}
          <Controller
            name="jambRegistrationNumber"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="md:col-span-2"
              >
                <FieldLabel htmlFor="jambRegistrationNumber">
                  JAMB Registration Number
                </FieldLabel>

                <Input
                  {...field}
                  id="jambRegistrationNumber"
                  placeholder="Enter your JAMB registration number"
                  aria-invalid={fieldState.invalid}
                />

                <p className="text-xs text-muted-foreground">
                  Enter the JAMB registration number used for your admission
                  examination.
                </p>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* School Name */}
          <Controller
            name="schoolName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="md:col-span-2"
              >
                <FieldLabel htmlFor="schoolName">
                  Secondary School / Previous Institution
                </FieldLabel>

                <Input
                  {...field}
                  id="schoolName"
                  placeholder="Enter the name of your school"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Year of Graduation */}
          <Controller
            name="yearOfGraduation"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="yearOfGraduation">
                  Year of Graduation
                </FieldLabel>

                <select
                  {...field}
                  id="yearOfGraduation"
                  className="flex h-10 w-full rounded-md border bg-background px-3 text-sm"
                  aria-invalid={fieldState.invalid}
                >
                  <option value="">Select year</option>

                  {Array.from({ length: 15 }, (_, index) => 2026 - index).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ),
                  )}
                </select>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Certificate Type */}
          <Controller
            name="certificateType"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="certificateType">
                  Certificate Type
                </FieldLabel>

                <select
                  {...field}
                  id="certificateType"
                  className="flex h-10 w-full rounded-md border bg-background px-3 text-sm"
                  aria-invalid={fieldState.invalid}
                >
                  <option value="">Select certificate</option>
                  <option value="WAEC">WAEC</option>
                  <option value="NECO">NECO</option>
                  <option value="NABTEB">NABTEB</option>
                  <option value="GCE">GCE</option>
                </select>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Previous Programme */}
          <Controller
            name="previousProgramme"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="md:col-span-2"
              >
                <FieldLabel htmlFor="previousProgramme">
                  Previous Programme of Study
                  <span className="ml-1 text-muted-foreground">(Optional)</span>
                </FieldLabel>

                <Input
                  {...field}
                  id="previousProgramme"
                  placeholder="e.g. Computer Science"
                  aria-invalid={fieldState.invalid}
                />

                <p className="text-xs text-muted-foreground">
                  Only required if you are applying through Direct Entry or have
                  previously attended a tertiary institution.
                </p>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </FieldGroup>

        {/* Information Notice */}
        <div className="mt-6 rounded-md border border-green-200 bg-green-50 p-4">
          <p className="text-sm text-green-800">
            <span className="font-medium">Important:</span> Make sure the
            academic information you provide matches the information on your
            official certificates and examination records.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex justify-end gap-3">
          <button
            type="submit"
            className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default AcademicInformationForm;
