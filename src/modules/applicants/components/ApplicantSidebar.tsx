import NeedHelp from "@/components/shared/NeedHelp";
import UniversityLogo from "@/components/shared/UniversityLogo";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  ClipboardList,
  FileText,
  Home,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router";

const items = [
  {
    title: "Dashboard",
    url: "/applicants",
    icon: Home,
  },
  {
    title: "Application",
    url: "/applicants/application",
    icon: ClipboardList,
  },
  {
    title: "Documents",
    url: "/applicants/documents",
    icon: FileText,
  },
  {
    title: "Application Slip",
    url: "/applicants/application-slip",
    icon: FileText,
  },
  {
    title: "Profile",
    url: "/applicants/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/applicants/settings",
    icon: Settings,
  },
];

const ApplicantSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarHeader className="h-20">
        <UniversityLogo />
      </SidebarHeader>

      <div className="px-4">
        <SidebarSeparator className="opacity-10" />
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      className={cn(
                        "h-8 text-sm",
                        isActive &&
                          "bg-nexus-primary text-nexus-accent hover:bg-nexus-primary hover:text-nexus-accent",
                      )}
                    >
                      <NavLink
                        to={item.url}
                        className={() =>
                          cn(
                            "flex items-center gap-3 rounded-md px-3 py-3 transition-colors",
                          )
                        }
                        end={item.url === "/applicants"}
                      >
                        <item.icon className="h-3 w-3" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}

              <SidebarMenuItem className="pl-3" onClick={() => navigate("/")}>
                <SidebarMenuButton className={cn("h-8 text-sm cursor-pointer")}>
                  <LogOut className="h-3 w-3" />
                  <span>Log out</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="px-5 mb-5">
        <NeedHelp userType="APPLICANT" />
      </div>
    </Sidebar>
  );
};

export default ApplicantSidebar;
