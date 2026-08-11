import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import {
  documentsSchema,
  type DocumentsFormType,
} from "@/modules/applicants/schemas";

import DocumentUploadField from "@/components/shared/DocumentUploadField";
import { FieldGroup } from "@/components/ui/field";

interface Props {
  onSuccess: () => void;
}

const DocumentsForm = ({ onSuccess }: Props) => {
  const form = useForm<DocumentsFormType>({
    resolver: zodResolver(documentsSchema),
    defaultValues: {
      passportPhotograph: undefined,
      jambResult: undefined,
      oLevelResult: undefined,
      birthCertificate: undefined,
      identification: undefined,
    },
  });

  const onSubmit = (data: DocumentsFormType) => {
    onSuccess();
    console.log(data);
  };

  return (
    <div className="bg-white p-5">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="space-y-6">
          {/* Passport Photograph */}
          <Controller
            name="passportPhotograph"
            control={form.control}
            render={({ field, fieldState }) => (
              <DocumentUploadField
                label="Passport Photograph"
                description="Upload a recent passport photograph."
                accept="image/jpeg,image/png"
                required
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error}
              />
            )}
          />

          {/* JAMB Result */}
          <Controller
            name="jambResult"
            control={form.control}
            render={({ field, fieldState }) => (
              <DocumentUploadField
                label="JAMB Result Slip"
                description="Upload your JAMB result slip."
                accept=".pdf,image/jpeg,image/png"
                required
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error}
              />
            )}
          />

          {/* O'Level Result */}
          <Controller
            name="oLevelResult"
            control={form.control}
            render={({ field, fieldState }) => (
              <DocumentUploadField
                label="O'Level Result"
                description="Upload your WAEC, NECO, NABTEB or equivalent result."
                accept=".pdf,image/jpeg,image/png"
                required
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error}
              />
            )}
          />

          {/* Birth Certificate */}
          <Controller
            name="birthCertificate"
            control={form.control}
            render={({ field, fieldState }) => (
              <DocumentUploadField
                label="Birth Certificate / Declaration of Age"
                description="Upload your birth certificate or declaration of age."
                accept=".pdf,image/jpeg,image/png"
                required
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error}
              />
            )}
          />

          {/* Identification */}
          <Controller
            name="identification"
            control={form.control}
            render={({ field, fieldState }) => (
              <DocumentUploadField
                label="Identification"
                description="Upload a valid means of identification."
                accept=".pdf,image/jpeg,image/png"
                required
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error}
              />
            )}
          />
        </FieldGroup>

        {/* Information */}
        <div className="mt-6 rounded-md border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm font-medium text-blue-900">
            Document Requirements
          </p>

          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-blue-800">
            <li>Accepted formats: PDF, JPG and PNG.</li>
            <li>Maximum file size: 5MB per document.</li>
            <li>Ensure all uploaded documents are clear and readable.</li>
            <li>Information on your documents must match your application.</li>
          </ul>
        </div>

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

export default DocumentsForm;
