import { CheckCircle2, FileText } from "lucide-react";

interface DocumentItemProps {
  name: string;
  fileName: string;
}

const DocumentItem = ({ name, fileName }: DocumentItemProps) => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3.5">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted">
          <FileText className="h-4 w-4 text-muted-foreground" />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium">{name}</p>

          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            {fileName}
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-green-600">
        <CheckCircle2 className="h-4 w-4" />
        Uploaded
      </div>
    </div>
  );
};

export default DocumentItem