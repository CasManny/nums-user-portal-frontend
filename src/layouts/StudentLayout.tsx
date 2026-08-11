import { SidebarProvider } from "@/components/ui/sidebar";
import StudentNavbar from "@/modules/students/components/StudentNavbar";
import StudentSidebar from "@/modules/students/components/StudentSidebar";
import { Outlet } from "react-router";

const StudentLayout = () => {
  return (
    <SidebarProvider>
      <StudentSidebar />
      <main className="flex flex-col gap-5 min-h-screen w-screen bg-muted">
        <StudentNavbar />
        <div className="px-5 flex-1">{<Outlet />}</div>
      </main>
    </SidebarProvider>
  );
};

export default StudentLayout;
