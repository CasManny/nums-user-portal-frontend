import {
  CheckCircle2,
  Clock3,
  Download,
  Eye,
  FileText,
  Upload,
  UserRound,
  X,
  XCircle
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

export interface Document {
  id: string;
  name: string;
  description: string;
  status: "uploaded" | "pending" | "rejected";
  dateUploaded?: string;
  timeUploaded?: string;
  fileUrl?: string;
  fileType?: "image" | "pdf";
  required?: boolean;
}

interface DocumentsTableProps {
  documents?: Document[];
}

const defaultDocuments: Document[] = [
  {
    id: "passport",
    name: "Passport Photograph",
    description: "A recent passport photograph with a white background.",
    status: "uploaded",
    dateUploaded: "20 May 2026",
    timeUploaded: "10:30 AM",
    fileUrl: "/documents/passport.jpg",
    fileType: "image",
  },
  {
    id: "jamb",
    name: "JAMB Result Slip",
    description: "JAMB result slip used for the admission application.",
    status: "uploaded",
    dateUploaded: "20 May 2026",
    timeUploaded: "10:32 AM",
    fileUrl: "/documents/jamb-result.pdf",
    fileType: "pdf",
  },
  {
    id: "olevel",
    name: "O'Level Result (WAEC/NECO)",
    description: "WAEC, NECO, NABTEB or equivalent result certificate.",
    status: "uploaded",
    dateUploaded: "20 May 2026",
    timeUploaded: "10:35 AM",
    fileUrl: "/documents/olevel.pdf",
    fileType: "pdf",
    required: true,
  },
  {
    id: "birth",
    name: "Birth Certificate / Declaration of Age",
    description: "Birth certificate or sworn declaration of age.",
    status: "uploaded",
    dateUploaded: "20 May 2026",
    timeUploaded: "10:40 AM",
    fileUrl: "/documents/birth-certificate.pdf",
    fileType: "pdf",
  },
  {
    id: "identification",
    name: "Identification",
    description:
      "Valid means of identification (e.g. National ID, Voter's Card, etc.).",
    status: "uploaded",
    dateUploaded: "20 May 2026",
    timeUploaded: "10:42 AM",
    fileUrl: "/documents/identification.pdf",
    fileType: "pdf",
    required: true,
  },
  {
    id: "lga",
    name: "Local Government Identification",
    description: "Proof of origin from your Local Government Area.",
    status: "pending",
    required: true,
  },
];

const DocumentsTable = ({
  documents = defaultDocuments,
}: DocumentsTableProps) => {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null,
  );

  const getDocumentIcon = (document: Document) => {
    if (document.fileType === "image") {
      return <UserRound className="h-4 w-4" />;
    }

    return <FileText className="h-4 w-4" />;
  };

  const getStatus = (status: Document["status"]) => {
    switch (status) {
      case "uploaded":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-md bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Uploaded
          </span>
        );

      case "pending":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-md bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600">
            <Clock3 className="h-3.5 w-3.5" />
            Pending
          </span>
        );

      case "rejected":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-md bg-red-50 px-2.5 py-1 text-xs font-medium text-red-600">
            <XCircle className="h-3.5 w-3.5" />
            Rejected
          </span>
        );
    }
  };

  return (
    <>
      <div className="w-full overflow-hidden rounded-lg border bg-background p-5">
        <div className="border-b px-4 py-3">
          <h2 className="text-sm font-semibold">Required Documents</h2>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[24%] text-[10px] uppercase">
                  Document
                </TableHead>

                <TableHead className="w-[25%] text-[10px] uppercase">
                  Description
                </TableHead>

                <TableHead className="w-[13%] text-[10px] uppercase">
                  Status
                </TableHead>

                <TableHead className="w-[17%] text-[10px] uppercase">
                  Date Uploaded
                </TableHead>

                <TableHead className="w-[15%] text-[10px] uppercase">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {documents.map((document) => (
                <TableRow key={document.id}>
                  {/* Document */}
                  <TableCell>
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-md",
                          document.fileType === "image"
                            ? "bg-purple-50 text-purple-600"
                            : "bg-blue-50 text-blue-600",
                        )}
                      >
                        {getDocumentIcon(document)}
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-foreground">
                          {document.name}
                        </p>

                        {document.required && (
                          <p className="mt-1 flex items-center gap-1 text-[10px] text-green-600">
                            <span>✓</span>
                            Required
                          </p>
                        )}
                      </div>
                    </div>
                  </TableCell>

                  {/* Description */}
                  <TableCell>
                    <p className="max-w-[220px] text-[13px] text-wrap text-muted-foreground">
                      {document.description}
                    </p>
                  </TableCell>

                  {/* Status */}
                  <TableCell>{getStatus(document.status)}</TableCell>

                  {/* Date */}
                  <TableCell>
                    {document.dateUploaded ? (
                      <div className="text-[10px]">
                        <p className="font-medium text-foreground">
                          {document.dateUploaded}
                        </p>
                        <p className="text-muted-foreground">
                          {document.timeUploaded}
                        </p>
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">-</span>
                    )}
                  </TableCell>

                  {/* Actions */}
                  <TableCell>
                    {document.status === "uploaded" ? (
                      <div className="flex items-center gap-2">
                        {/* View */}
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => setSelectedDocument(document)}
                        >
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View {document.name}</span>
                        </Button>

                        {/* Download */}
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <a
                            href={document.fileUrl}
                            download
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Download className="h-4 w-4" />

                            <span className="sr-only">
                              Download {document.name}
                            </span>
                          </a>
                        </Button>
                      </div>
                    ) : (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-8 gap-2 text-xs text-primary"
                      >
                        <Upload className="h-3.5 w-3.5" />
                        Upload
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Document Preview Dialog */}
      <AlertDialog
        open={!!selectedDocument}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedDocument(null);
          }
        }}
      >
        <AlertDialogContent className="max-w-4xl">
          <button
            type="button"
            onClick={() => setSelectedDocument(null)}
            className="absolute cursor-pointer right-4 top-4 rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close document preview"
          >
            <X className="h-5 w-5" />
          </button>
          <AlertDialogHeader>
            <AlertDialogTitle>{selectedDocument?.name}</AlertDialogTitle>

            <AlertDialogDescription>
              Preview of your uploaded document.
            </AlertDialogDescription>
          </AlertDialogHeader>

          {/* Preview */}
          <div className="mt-2 flex min-h-[400px] max-h-[70vh] items-center justify-center overflow-auto rounded-lg border bg-muted/30 p-4">
            {selectedDocument?.fileType === "image" &&
              selectedDocument.fileUrl && (
                <img
                  src={selectedDocument.fileUrl}
                  alt={selectedDocument.name}
                  className="max-h-[60vh] max-w-full rounded-md object-contain"
                />
              )}

            {selectedDocument?.fileType === "pdf" &&
              selectedDocument.fileUrl && (
                <iframe
                  src={selectedDocument.fileUrl}
                  title={selectedDocument.name}
                  className="h-[60vh] w-full rounded-md border"
                />
              )}

            {!selectedDocument?.fileUrl && (
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <FileText className="h-10 w-10" />

                <p className="text-sm">Document preview is unavailable.</p>
              </div>
            )}
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DocumentsTable;
