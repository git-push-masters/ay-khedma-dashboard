import client from "./config";

const { get, delete: del, patch } = client;

const sectionService = {
    getAllSections: () => get("/sections"),
    deleteSection: (id: string) => del("/sections/" + id),
    addSection: (name: string, icon: string | null) =>
        client.post("/sections", { name, icon }),
    updateSection: (id: string, name: string, icon: string | null) =>
        patch("/sections/" + id, { name, icon }),
};

export default sectionService;
