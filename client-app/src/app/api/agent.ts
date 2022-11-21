import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { history } from "../..";
import { Doktori } from "../models/doktori";
import { Infermierja } from "../models/infermierja";
import { Laboranti } from "../models/laboranti";
import { Pacienti } from "../models/pacienti";
import { User, UserFormValues } from "../models/user";
import { store } from "../stores/store";

const sleep=(delay: number) =>{
    return new Promise ((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api/';

axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config;
})

axios.interceptors.response.use(async response => {
        await sleep(1000);
        return response;
}, (error: AxiosError) => {
    const {data, status, config} = error.response!;
    switch (status) {
        case 400:
           if(config.method === 'get' && data.errors.hasOwnProperty('id')){
            history.push('/not-found');
           }
           if(data.errors){
            const modalStateErrors = [];
            for(const key in data.errors){
                if(data.errors[key]){
                    modalStateErrors.push(data.errors[key])
                }
            }
            throw modalStateErrors.flat();
           }
            break;
        case 401:
            toast.error('unauthorized');
            break;
        case 404:
            history.push('/not-found');
            break;
        case 500:
            store.commonStore.setServerError(data);
            history.push('/server-error');
            break;
    }
    return Promise.reject(error);
})

const responseBody = <T> (response : AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string)=> axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {})=> axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {})=> axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string)=> axios.delete<T>(url).then(responseBody),
}

const Infermjeret = {
    list: () => requests.get<Infermierja[]>('Infermierja'),
    details: (id: string) => requests.get<Infermierja>(`Infermierja/${id}`),
    create: (infermierja: Infermierja) => axios.post<void>('Infermierja', infermierja),
    update: (infermierja: Infermierja) => axios.put<void>(`Infermierja/${infermierja.id}`,infermierja),
    delete: (id: string) => axios.delete<void>(`Infermierja/${id}`)
}
const Doktoret = {
    list: () => requests.get<Doktori[]>('Doktori'),
    details: (id: string) => requests.get<Doktori>(`Doktori/${id}`),
    create: (doktori: Doktori) => axios.post<void>('Doktori', doktori),
    update: (doktori: Doktori) => axios.put<void>(`Doktori/${doktori.id}`,doktori),
    delete: (id: string) => axios.delete<void>(`Infermierja/${id}`)
}

const Pacientet = {
    list: () => requests.get<Pacienti[]>('Pacienti'),
    details: (id: string) => requests.get<Pacienti>(`Pacienti/${id}`),
    create: (pacienti: Pacienti) => axios.post<void>('Pacienti', pacienti),
    update: (pacienti: Pacienti) => axios.put<void>(`Pacienti/${pacienti.id}`,pacienti),
    delete: (id: string) => axios.delete<void>(`Pacienti/${id}`)
}

const Laborantet = {
    list: () => requests.get<Laboranti[]>('Laboranti'),
    details: (id: string) => requests.get<Laboranti>(`Laboranti/${id}`),
    create: (laboranti: Laboranti) => axios.post<void>('Laboranti', laboranti),
    update: (laboranti: Laboranti) => axios.put<void>(`Laboranti/${laboranti.id}`,laboranti),
    delete: (id: string) => axios.delete<void>(`Laboranti/${id}`)
}

const Account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/register', user)
}


const agent = {
    Infermjeret,
    Account,
    Doktoret,
    Pacientet
}

export default agent;
