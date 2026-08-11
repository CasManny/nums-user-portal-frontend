import { CheckCircle2, FileText, Eye, Download } from "lucide-react";

interface UploadedDocument {
  id: string;
  name: string;
  fileName: string;
  uploaded: boolean;
}

const documents: UploadedDocument[] = [
  {
    id: "1",
    name: "Passport Photograph",
    fileName: "passport-photo.jpg",
    uploaded: true,
  },
  {
    id: "2",
    name: "JAMB Result Slip",
    fileName: "jamb-result-2026.pdf",
    uploaded: true,
  },
  {
    id: "3",
    name: "O'Level Result",
    fileName: "waec-result.pdf",
    uploaded: true,
  },
  {
    id: "4",
    name: "Birth Certificate / Declaration of Age",
    fileName: "birth-certificate.pdf",
    uploaded: true,
  },
  {
    id: "5",
    name: "Local Government Identification",
    fileName: "lga-identification.pdf",
    uploaded: false,
  },
];

const UploadedDocuments = () => {
  const uploadedCount = documents.filter(
    (document) => document.uploaded,
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold">Uploaded Documents</h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Review the documents you have uploaded for your application.
        </p>
      </div>

      {/* Progress */}
      <div className="rounded-lg border bg-muted/20 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Document Submission</p>

            <p className="mt-1 text-xs text-muted-foreground">
              {uploadedCount} of {documents.length} documents uploaded
            </p>
          </div>

          <span className="text-sm font-semibold">
            {uploadedCount}/{documents.length}
          </span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{
              width: `${(uploadedCount / documents.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Documents */}
      <div className="overflow-hidden rounded-lg border">
        <div className="grid grid-cols-[1fr_auto] border-b bg-muted/30 px-5 py-3 text-xs font-medium uppercase text-muted-foreground">
          <span>Document</span>
          <span>Status</span>
        </div>

        <div className="divide-y">
          {documents.map((document) => (
            <div
              key={document.id}
              className="flex items-center justify-between gap-4 px-5 py-4"
            >
              {/* Document information */}
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium">{document.name}</p>

                  {document.uploaded ? (
                    <p className="mt-1 truncate text-xs text-muted-foreground">
                      {document.fileName}
                    </p>
                  ) : (
                    <p className="mt-1 text-xs text-muted-foreground">
                      Document not uploaded
                    </p>
                  )}
                </div>
              </div>

              {/* Status / Actions */}
              <div className="flex shrink-0 items-center gap-3">
                {document.uploaded ? (
                  <>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="hidden sm:inline">Uploaded</span>
                    </div>

                    <button
                      type="button"
                      className="rounded-md p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                      title="View document"
                    >
                      <Eye className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      className="rounded-md p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                      title="Download document"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  </>
                ) : (
                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                    Not Uploaded
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notice */}
      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
        <p className="text-sm font-medium text-blue-900">
          Document Verification
        </p>

        <p className="mt-1 text-sm text-blue-800">
          Uploaded documents will be reviewed and verified by the admissions
          office. You will be notified if any document requires correction or
          replacement.
        </p>
      </div>
    </div>
  );
};

export default UploadedDocuments;
