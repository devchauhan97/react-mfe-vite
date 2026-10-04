import api from ".";

const loginService = (username: string, password: string) => {
  return api
    .post("api/auth/login", { username, password })
    .then((response) => {
      console.log("Login successful:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Login failed:", error);
      throw error;
    });
};

export default loginService;