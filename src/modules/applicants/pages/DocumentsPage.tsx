import { ApplicationBreadcrumb } from "@/components/shared/ApplicationBreadcrumb";
import DocumentsTable from "../components/document/DocumentsTable";
import DocumentSubmission from "../components/document/DocumentSubmission";
import ImportantNotes from "../components/document/ImportNotes";

const DocumentsPage = () => {
  return (
    <div className="space-y-1 pb-8">
      <ApplicationBreadcrumb title="My Documents" second="Documents" />
      <DocumentSubmission />
      <DocumentsTable />
      <ImportantNotes />
    </div>
  );
};

export default DocumentsPage;
