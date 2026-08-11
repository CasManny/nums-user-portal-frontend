import ApplicationNavbar from "@/components/shared/ApplicationNavbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import ApplicantSidebar from "@/modules/applicants/components/ApplicantSidebar";
import { Outlet } from "react-router";

const ApplicantLayout = () => {
  return (
    <SidebarProvider>
      <ApplicantSidebar />
      <main className="flex flex-col gap-5 min-h-screen w-screen bg-muted">
        <ApplicationNavbar />
        <div className="px-5 flex-1">{<Outlet />}</div>
      </main>
    </SidebarProvider>
  );
};

export default ApplicantLayout;
