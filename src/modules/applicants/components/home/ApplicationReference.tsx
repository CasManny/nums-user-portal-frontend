import { ArrowRight, Check, Copy } from "lucide-react";
import { useState } from "react";

interface ApplicationReferenceProps {
  reference?: string | null;
}

const ApplicationReference = ({ reference }: ApplicationReferenceProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyReference = async () => {
    if (!reference) return;

    await navigator.clipboard.writeText(reference);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="space-y-1">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
        Application Reference
      </p>

      {reference ? (
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-wide">{reference}</span>

          <button
            type="button"
            onClick={handleCopyReference}
            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Copy application reference"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <p className="text-sm text-muted-foreground">
            You haven't started an application yet.
          </p>

          <button
            type="button"
            className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:underline"
          >
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ApplicationReference;
