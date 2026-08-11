/* eslint-disable @typescript-eslint/no-explicit-any */
import { FileText, Upload, X } from "lucide-react";
import { Field, FieldError, FieldLabel } from "../ui/field";

interface DocumentUploadFieldProps {
  label: string;
  description: string;
  accept?: string;
  required?: boolean;
  value?: File;
  onChange: (file: File | undefined) => void;
  error?: any;
}

const DocumentUploadField = ({
  label,
  description,
  accept,
  required,
  value,
  onChange,
  error,
}: DocumentUploadFieldProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      onChange(file);
    }
  };

  const removeFile = () => {
    onChange(undefined);
  };

  return (
    <Field data-invalid={!!error}>
      <FieldLabel>
        {label}

        {required && <span className="ml-1 text-destructive">*</span>}
      </FieldLabel>

      <div
        className={`rounded-lg border p-4 ${
          error ? "border-destructive" : "border-border"
        }`}
      >
        {!value ? (
          <label
            htmlFor={label}
            className="flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed p-6 text-center transition hover:bg-muted/50"
          >
            <div className="mb-3 rounded-full bg-primary/10 p-3">
              <Upload className="h-5 w-5 text-primary" />
            </div>

            <p className="text-sm font-medium">Click to upload</p>

            <p className="mt-1 text-xs text-muted-foreground">{description}</p>

            <p className="mt-2 text-xs text-muted-foreground">
              PDF, JPG or PNG · Max 5MB
            </p>

            <input
              id={label}
              type="file"
              accept={accept}
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="rounded-md bg-primary/10 p-2">
                <FileText className="h-5 w-5 text-primary" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{value.name}</p>

                <p className="text-xs text-muted-foreground">
                  {(value.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={removeFile}
              className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-destructive"
              aria-label={`Remove ${label}`}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {error && <FieldError errors={[error]} />}
    </Field>
  );
};

export default DocumentUploadField;
