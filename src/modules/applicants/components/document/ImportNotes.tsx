import { Info } from "lucide-react";

interface ImportantNotesProps {
  notes?: string[];
}

const defaultNotes = [
  "All documents must be clear and readable.",
  "Accepted formats: PDF, JPG, PNG. Max file size: 5MB.",
  "Ensure that the information on your documents matches your application.",
  "You will be notified if any document is rejected.",
];

const ImportantNotes = ({ notes = defaultNotes }: ImportantNotesProps) => {
  return (
    <div className="rounded-lg border border-blue-100 bg-white px-4 py-3">
      <div className="flex gap-2 flex-col">
        {/* Info Icon */}
        <div className="flex items-center gap-2">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-nexus-accent" />

          <h3 className="text-[10px] font-semibold text-nexus-accent">
            Important Notes
          </h3>
        </div>

        <div className="min-w-0 flex-1">
          {/* Notes */}
          <ul className="mt-1.5 grid grid-cols-1 gap-x-8 gap-y-1 text-[12px] leading-3.5 text-muted-foreground sm:grid-cols-2">
            {notes.map((note, index) => (
              <li key={index} className="relative pl-3 text-black">
                <span className="absolute left-0 top-0">•</span>

                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImportantNotes;
