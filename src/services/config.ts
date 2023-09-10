import axios from "axios";

const config = {
    baseURL: "http://localhost:4000/dashboard/api",
};

const client = axios.create(config);

export default client;
