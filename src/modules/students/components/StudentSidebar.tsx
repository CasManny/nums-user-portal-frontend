import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  Bell,
  BookOpen,
  CreditCard,
  FileText,
  Home,
  Hotel,
  Settings,
  User,
} from "lucide-react";
import { NavLink, useLocation } from "react-router";

const items = [
  {
    title: "Dashboard",
    url: "/students",
    icon: Home,
  },
  {
    title: "My Profile",
    url: "/students/profile",
    icon: User,
  },
  {
    title: "Course Registration",
    url: "/students/course-registration",
    icon: FileText,
  },
  {
    title: "My Courses",
    url: "/students/courses",
    icon: BookOpen,
  },
  {
    title: "Results",
    url: "/students/results",
    icon: FileText,
  },
  {
    title: "Fees / Payment",
    url: "/students/payments",
    icon: CreditCard,
  },
  {
    title: "Hostel",
    url: "/students/hostel",
    icon: Hotel,
  },
  {
    title: "Notices",
    url: "/students/notices",
    icon: Bell,
  },
  {
    title: "Settings",
    url: "/students/settings",
    icon: Settings,
  },
];

const StudentSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar>
      {/* <SidebarHeader>
        <Logo />
      </SidebarHeader> */}

      <div className="px-4 py-2">
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
                        end={item.url === "/students"}
                        className="flex w-full items-center gap-3 rounded-md px-3 py-3 transition-colors"
                      >
                        <item.icon className="h-3 w-3" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default StudentSidebar;
