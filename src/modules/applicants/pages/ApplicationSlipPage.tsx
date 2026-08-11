import { ApplicationBreadcrumb } from "@/components/shared/ApplicationBreadcrumb";
import ApplicationInfoPanel from "../components/application-slip/ApplicationInfoPanel";
import ApplicationSubmittedAlert from "../components/application-slip/ApplicationSubmissionAlert";
import ApplicationSlip from "../components/application-slip/ApplicationSlip";

const ApplicationSlipPage = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pb-10">
      {/* ================================
          SCREEN ONLY
      ================================= */}
      <div className="space-y-1 print:hidden">
        <ApplicationBreadcrumb
          title="Application Slip"
          second="Application slip"
        />

        <div className="grid grid-cols-3 gap-5">
          {/* Left */}
          <div className="col-span-2 space-y-1">
            <ApplicationSubmittedAlert />
            <ApplicationSlip />
          </div>

          {/* Right */}
          <div className="sticky top-6 self-start lg:col-span-1">
            <ApplicationInfoPanel onPrint={handlePrint} />
          </div>
        </div>
      </div>

      {/* ================================
          PRINT ONLY
      ================================= */}
      <div className="hidden print:block">
        <ApplicationSlip />
      </div>
    </div>
  );
};

export default ApplicationSlipPage;
