import ApplicationStatus from "./ApplicationStatus";
import ApplicationProgress from "./ApplicationProgress";
import AdmissionTimeline from "./AdmissionTimeline";

const ApplicationOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <ApplicationStatus />
      <ApplicationProgress />
      <AdmissionTimeline />
    </div>
  );
};

export default ApplicationOverview;
