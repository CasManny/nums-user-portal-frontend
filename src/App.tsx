import { Navigate, Route, Routes } from "react-router";

import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";

import RegisterPage from "@/modules/auth/pages/RegisterPage";
import LoginPage from "@/modules/auth/pages/LoginPage";
import LecturerHomePage from "@/modules/lectures/pages/LecturerHomePage";
import ApplicantHomePage from "@/modules/applicants/pages/ApplicantHomePage";
import StudentHomePage from "@/modules/students/pages/StudentHomePage";

import ApplicantLayout from "@/layouts/ApplicantLayout";
import StudentLayout from "@/layouts/StudentLayout";
import LecturerLayout from "@/layouts/LecturerLayout";


const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        
        {/* Redirect "/" to the login page */}
        <Route index element={<Navigate to="/auth/login" replace />} />

        {/* Authentication */}
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* Applicant */}
        <Route path="applicants" element={<ApplicantLayout />}>
          <Route index element={<ApplicantHomePage />} />
        </Route>

        {/* Student */}
        <Route path="students" element={<StudentLayout />}>
          <Route index element={<StudentHomePage />} />
        </Route>

        {/* Lecturer */}
        <Route path="lecturers" element={<LecturerLayout />}>
          <Route index element={<LecturerHomePage />} />
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={
            <h1 className="text-center mt-20 text-3xl">404 - Page Not Found</h1>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
