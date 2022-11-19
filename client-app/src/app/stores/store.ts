import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import InfermierjaStore from "./infermierjaStore";
import ModalStore from "./modalStore";
import UserStore from "./userStore";


interface Store{
    infermierjaStore: InfermierjaStore;
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
}

export const store: Store = {
    infermierjaStore: new InfermierjaStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}