/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./axios";

// Generic request handler
export const requestHandler = async (
  method: "get" | "post" | "put" | "patch" | "delete",
  url: string,
  data?: any,
  token?: string | null,
) => {
  try {
    const config: any = {
      method: method.toLowerCase(),
      url,
    };

    // Attach body for write operations
    if (data && ["post", "put", "patch"].includes(method.toLowerCase())) {
      config.data = data;
    }

    // Attach token if provided
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    const response = await api(config);
    return response?.data;
  } catch (error: any) {
    console.error("Request error:", error);
    throw error?.response?.data || error;
  }
};
