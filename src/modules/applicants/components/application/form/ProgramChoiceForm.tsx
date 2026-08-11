import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, useWatch } from "react-hook-form";

import {
  programChoiceSchema,
  type ProgramChoiceFormType,
} from "@/modules/applicants/schemas";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

interface Props {
  onSuccess: () => void;
}

const ProgramChoiceForm = ({ onSuccess }: Props) => {
  const form = useForm<ProgramChoiceFormType>({
    resolver: zodResolver(programChoiceSchema),
    defaultValues: {
      facultyId: "",
      departmentId: "",
      programmeId: "",
      degreeType: "",
      modeOfStudy: "",
    },
  });


  const onSubmit = (data: ProgramChoiceFormType) => {
    onSuccess();
    console.log(data);
  };

  /**
   * These would normally come from your API.
   */
  const faculties = [
    {
      id: "computing",
      name: "Faculty of Computing",
    },
    {
      id: "engineering",
      name: "Faculty of Engineering",
    },
    {
      id: "science",
      name: "Faculty of Science",
    },
    {
      id: "social-sciences",
      name: "Faculty of Social Sciences",
    },
  ];

  const departments = [
    {
      id: "computer-science",
      facultyId: "computing",
      name: "Department of Computer Science",
    },
    {
      id: "information-technology",
      facultyId: "computing",
      name: "Department of Information Technology",
    },
    {
      id: "software-engineering",
      facultyId: "computing",
      name: "Department of Software Engineering",
    },
    {
      id: "electrical-engineering",
      facultyId: "engineering",
      name: "Department of Electrical Engineering",
    },
    {
      id: "mechanical-engineering",
      facultyId: "engineering",
      name: "Department of Mechanical Engineering",
    },
  ];

  const programmes = [
    {
      id: "bsc-computer-science",
      departmentId: "computer-science",
      name: "B.Sc. Computer Science",
    },
    {
      id: "bsc-information-technology",
      departmentId: "information-technology",
      name: "B.Sc. Information Technology",
    },
    {
      id: "bsc-software-engineering",
      departmentId: "software-engineering",
      name: "B.Sc. Software Engineering",
    },
    {
      id: "beng-electrical",
      departmentId: "electrical-engineering",
      name: "B.Eng. Electrical Engineering",
    },
    {
      id: "beng-mechanical",
      departmentId: "mechanical-engineering",
      name: "B.Eng. Mechanical Engineering",
    },
  ];

  const selectedFaculty = useWatch({
    control: form.control,
    name: "facultyId",
  });
  const selectedDepartment = useWatch({
    control: form.control,
    name: "departmentId",
  });
  const programmeId = useWatch({ control: form.control, name: "programmeId" });


  const filteredDepartments = departments.filter(
    (department) => department.facultyId === selectedFaculty,
  );

  const filteredProgrammes = programmes.filter(
    (programme) => programme.departmentId === selectedDepartment,
  );

  return (
    <div className="bg-white p-5">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Faculty */}
          <Controller
            name="facultyId"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="facultyId">Faculty</FieldLabel>

                <select
                  {...field}
                  id="facultyId"
                  className="flex h-10 w-full rounded-md border bg-background px-3 text-sm"
                  aria-invalid={fieldState.invalid}
                  onChange={(event) => {
                    field.onChange(event);

                    // Reset dependent fields
                    form.setValue("departmentId", "");
                    form.setValue("programmeId", "");
                  }}
                >
                  <option value="">Select faculty</option>

                  {faculties.map((faculty) => (
                    <option key={faculty.id} value={faculty.id}>
                      {faculty.name}
                    </option>
                  ))}
                </select>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Department */}
          <Controller
            name="departmentId"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="departmentId">Department</FieldLabel>

                <select
                  {...field}
                  id="departmentId"
                  disabled={!selectedFaculty}
                  className="flex h-10 w-full rounded-md border bg-background px-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                  aria-invalid={fieldState.invalid}
                  onChange={(event) => {
                    field.onChange(event);

                    // Reset programme when department changes
                    form.setValue("programmeId", "");
                  }}
                >
                  <option value="">
                    {selectedFaculty
                      ? "Select department"
                      : "Select a faculty first"}
                  </option>

                  {filteredDepartments.map((department) => (
                    <option key={department.id} value={department.id}>
                      {department.name}
                    </option>
                  ))}
                </select>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Programme */}
          <Controller
            name="programmeId"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="md:col-span-2"
              >
                <FieldLabel htmlFor="programmeId">Programme</FieldLabel>

                <select
                  {...field}
                  id="programmeId"
                  disabled={!selectedDepartment}
                  className="flex h-10 w-full rounded-md border bg-background px-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                  aria-invalid={fieldState.invalid}
                >
                  <option value="">
                    {selectedDepartment
                      ? "Select programme"
                      : "Select a department first"}
                  </option>

                  {filteredProgrammes.map((programme) => (
                    <option key={programme.id} value={programme.id}>
                      {programme.name}
                    </option>
                  ))}
                </select>

                <p className="text-xs text-muted-foreground">
                  Select the programme you wish to apply for.
                </p>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Degree Type */}
          <Controller
            name="degreeType"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="degreeType">Degree Type</FieldLabel>

                <select
                  {...field}
                  id="degreeType"
                  className="flex h-10 w-full rounded-md border bg-background px-3 text-sm"
                  aria-invalid={fieldState.invalid}
                >
                  <option value="">Select degree type</option>
                  <option value="BACHELOR">Bachelor's Degree</option>
                  <option value="DIPLOMA">Diploma</option>
                  <option value="POSTGRADUATE">Postgraduate</option>
                </select>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Mode of Study */}
          <Controller
            name="modeOfStudy"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="modeOfStudy">Mode of Study</FieldLabel>

                <select
                  {...field}
                  id="modeOfStudy"
                  className="flex h-10 w-full rounded-md border bg-background px-3 text-sm"
                  aria-invalid={fieldState.invalid}
                >
                  <option value="">Select mode of study</option>
                  <option value="FULL_TIME">Full Time</option>
                  <option value="PART_TIME">Part Time</option>
                </select>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </FieldGroup>

        {/* Programme Information */}
        <div className="mt-6 rounded-md border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm font-medium text-blue-900">
            Programme Selection
          </p>

          <p className="mt-1 text-sm text-blue-800">
            Select your faculty first. The available departments and programmes
            will be filtered based on your selection.
          </p>
        </div>

        {/* Selected Programme Preview */}
        {selectedDepartment && (
          <div className="mt-4 rounded-md border bg-muted/30 p-4">
            <p className="text-xs font-medium uppercase text-muted-foreground">
              Selected Programme
            </p>

            <p className="mt-1 font-medium">
              {programmes.find((p) => p.id === programmeId)?.name ||
                "No programme selected"}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            className="rounded-md border px-6 py-2 text-sm font-medium"
          >
            Back
          </button>

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

export default ProgramChoiceForm;
