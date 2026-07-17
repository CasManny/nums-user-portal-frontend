# 🎓 Nexus University Management System (NUMS) Frontend

The **Nexus University Management System (NUMS)** is a modern web application designed to digitize and streamline university operations. This frontend provides an intuitive and responsive user interface for applicants, students, lecturers, and administrators to interact with the university management platform.

The project is built with modern web technologies to deliver a fast, scalable, and maintainable user experience.

---

## ✨ Features

### Applicant Portal

* Applicant registration
* Secure authentication
* Admission application
* Application status tracking
* Profile management

### Student Portal

* Secure login
* Student dashboard
* Course registration
* Fee payment
* Academic results
* Transcript requests
* Profile management

### Lecturer Portal

* Secure login
* Course management
* Student grading
* Result submission
* Class management

### Administrator Portal

* Student management
* Lecturer management
* Faculty and department management
* Course management
* Admission management
* Academic session management
* System administration

---

# Tech Stack

* React
* Vite
* TypeScript
* React Router
* React Hook Form
* Zod
* Tailwind CSS
* TanStack Query 
* Axios

---

# Project Structure

```
src/
│
├── assets/
├── components/
├── layouts/
├── modules/
│   ├── auth/
│   ├── applicants/
│   ├── students/
│   ├── lecturers/
│   └── admin/
│
├── routes/
├── services/
├── hooks/
├── lib/
├── utils/
└── main.tsx
```

---

#  Getting Started

## Clone the repository

```bash
git clone https://github.com/CasManny/nums-user-portal-frontend.git
```

```bash
cd nums-user-portal-frontend
```

## Install dependencies

```bash
npm install
```

or

```bash
yarn
```

## Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

#  Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# Environment Variables

Create a `.env` file in the project root.

```env
VITE_API_BASE_URL=http://localhost:8080/api/v1
```

Adjust the API URL according to your backend environment.

---

# Project Goals

NUMS aims to provide a centralized platform that simplifies university operations by:

* Improving the admission process
* Digitizing student records
* Streamlining course registration
* Simplifying fee management
* Supporting academic result processing
* Enhancing communication between students, lecturers, and administrators

---

# Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/my-feature
```

3. Commit your changes.

```bash
git commit -m "Add my feature"
```

4. Push your branch.

```bash
git push origin feature/my-feature
```

5. Open a Pull Request.

---

## Future Roadmap

* Applicant workflow
* Student dashboard
* Lecturer dashboard
* Administrator dashboard
* Payment integration
* Notifications
* Transcript generation
* Dark mode
* Accessibility improvements
* Progressive Web App (PWA)
* Mobile application
