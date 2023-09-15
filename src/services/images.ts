import client from "./config";

const { post, get } = client;

const imageService = {
    getAvatar: (fileName: string) => get(fileName),
    postSectionIcon: (data: FormData) => post("/icons", data),
};

export default imageService;
