import client from "./config";

const { post } = client;

const authService = {
    login: (username: string, password: string) =>
        post("/auth/login", { username, password }),
};

export default authService;
