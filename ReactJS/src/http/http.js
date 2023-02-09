import axios from "axios";

const http = axios.create();

export const get = async (url, option = {}) => {
    const response = await http.get(url, option);
    return response.data;
}

export const post = async (url, data, option = {}) => {
    const response = await http.post(url, data, option);
    return response.data;
}

export const put = async (url, data, option = {}) => {
    const response = await http.put(url, data, option);
    return response.data;
}

export const remove = async (url, option = {}) => {
    const response = await http.delete(url, option);
    return response.data;
}

export default http;