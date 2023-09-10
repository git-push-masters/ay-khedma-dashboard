import client from "./config";

const { get, delete: del } = client;

const userService = {
    getAllUsers: () => get("/users"),
    deleteUser: (id: string) => del("/users/" + id),
};

export default userService;
