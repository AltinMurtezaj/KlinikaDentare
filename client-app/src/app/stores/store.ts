import { createContext, useContext } from "react";
import InfermierjaStore from "./infermierjaStore";

interface Store{
    infermierjaStore: InfermierjaStore
}

export const store: Store ={
    infermierjaStore: new InfermierjaStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}