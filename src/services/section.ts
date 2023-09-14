import client from "./config";

const { get, delete: del } = client;

const sectionService = {
    getAllSections: () => get("/sections"),
    deleteSection: (id: string) => del("/section/" + id),
};

export default sectionService;
