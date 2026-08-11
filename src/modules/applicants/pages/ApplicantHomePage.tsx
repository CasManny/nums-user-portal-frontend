import ApplicantQuickActions from "../components/home/ApplicantQuickAction";
import ApplicationOverview from "../components/application-overview";
import ApplicantWelcome from "../components/home/ApplicantWelcome";

const ApplicantHomePage = () => {
  return (
    <div className="space-y-2 px-2 pb-8">
      <ApplicantWelcome
        name="Chukwu Sabastine"
        applicationReference="NUEI-2026-000231"
        programme="B.Sc. Computer Science"
        faculty="Faculty of Computing"
        email="chukwu.sabastine@example.com"
        phone="+234 803 123 4567"
        // avatarUrl="/images/student.jpg"
      />
      <ApplicationOverview />
      <ApplicantQuickActions />
    </div>
  );
};

export default ApplicantHomePage;
