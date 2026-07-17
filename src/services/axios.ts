import axios from "axios";

// Create an axios instance with base URL from Vite env
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // e.g. "https://api.nums.com"
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors for auth tokens or error handling
api.interceptors.request.use(
  (config) => {
    // Example: attach token if available
    const token = localStorage.getItem("nuei_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors (e.g., 401, 500)
    if (error.response?.status === 401) {
      // redirect to login or refresh token logic
      console.warn("Unauthorized, redirecting to login...");
    }
    return Promise.reject(error);
  },
);

export default api;
