import Axios from "axios";

const api = Axios.create({
  baseURL: import.meta.env.DEV ? "/" : import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const redirectToLogin = () => {
  if (window.location.pathname !== "/login" && window.location.pathname !== "/") {
    window.location.replace("/login");
  }
};

api.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => Promise.reject(error)
);

api.interceptors.response.use(
  (response: any) => response,
  async (error: any) => {
    const originalRequest = error.config;

    if (!error.response || !originalRequest) {
      return Promise.reject(error);
    }

    const isUnauthorized = error.response.status === 401 || error.response.status === 403;

    if (isUnauthorized && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await api.post("api/auth/refresh-token");
        return api.request(originalRequest);
      } catch (refreshError) {
        redirectToLogin();
        console.error("Session refresh failed:", refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;