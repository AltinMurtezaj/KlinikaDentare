import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import InfermierjaStore from "./infermierjaStore";

interface Store{
    infermierjaStore: InfermierjaStore;
    commonStore: CommonStore;
}

export const store: Store = {
    infermierjaStore: new InfermierjaStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}