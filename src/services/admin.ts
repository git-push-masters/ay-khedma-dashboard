import client from "./config";

const { get, delete: del, patch, post } = client;

const adminService = {
    getAllAdmins: () => get("/admins"),
    createAdmin: (data: any) => post("/admins", data),
    updateAdmin: (id: string, data: any) => patch("/admins/" + id, data),
    deleteAdmin: (id: string) => del("/admins/" + id),
};

export default adminService;
