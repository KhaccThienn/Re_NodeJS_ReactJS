import * as http from '../http/http'

const urlApi = 'http://localhost:8000';

export const all = async () => {
    try {
        const response = await http.get(`${urlApi}/api/student`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const create = async (data) => {
    try {
        const response = await http.post(`${urlApi}/api/student`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getByID = async (id) => {
    try {
        const response = await http.get(`${urlApi}/api/student/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const update = async (id, data) => {
    try {
        const response = await http.put(`${urlApi}/api/student/${id}`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (id) => {
    try {
        const response = await http.remove(`${urlApi}/api/student/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}