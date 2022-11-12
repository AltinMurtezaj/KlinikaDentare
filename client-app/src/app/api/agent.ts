import axios, { AxiosResponse } from "axios";
import { resolve } from "path";
import { Infermierja } from "../layout/models/infermierja";

const sleep=(delay: number) =>{
    return new Promise ((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        return await Promise.reject(error);
    }
})

const responseBody = <T> (response : AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string)=> axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {})=> axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {})=> axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string)=> axios.delete<T>(url).then(responseBody),
}

const Infermjeret = {
    list: () => requests.get<Infermierja[]>('/infermierja'),
    details: (id: string) => requests.get<Infermierja>(`/infermierja/${id}`),
    create: (infermierja: Infermierja) => axios.post<void>('/infermierja', infermierja),
    update: (infermierja: Infermierja) => axios.put<void>(`/infermierja/${infermierja.id}`,infermierja),
    delete: (id: string) => axios.delete<void>(`/infermierja/${id}`)
}
const agent = {
    Infermjeret
}

export default agent;
