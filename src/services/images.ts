import client from "./config";

const { post, get } = client;

const imageService = {
    getAvatar: (fileName: string) => get(fileName),
};

export default imageService;
