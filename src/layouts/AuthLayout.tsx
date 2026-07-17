import { Outlet } from "react-router";
import loginImage from "@/assets/Login-image.png";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[#FDF9F4]">
      <div className="mx-auto h-screen w-full max-w-6xl px-6 lg:px-8 xl:px-12">
        <div className="grid h-full lg:grid-cols-2">
          {/* Left Side */}
          <div className="hidden  lg:flex items-end justify-center overflow-hidden">
            <img
              src="/src/assets/student-standing.png"
              alt="University Students"
              className="h-[95%] w-auto object-contain"
            />
          </div>

          {/* Right Side */}
          <div className="overflow-y-auto scrollbar-none bg-white">
            <div className="flex min-h-full items-center justify-center py-12">
              <div className="w-full bg-white">
                <div className="flex flex-col items-center justify-center w-full">
                  <img
                    src={loginImage}
                    alt="School Logo"
                    className="mb-8 h-50 w-auto object-contain"
                  />
                  <div className="w-full max-w-md">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
