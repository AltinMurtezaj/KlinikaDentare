import {makeAutoObservable, runInAction} from "mobx"
import agent from "../api/agent";
import { Infermierja } from "../layout/models/infermierja"
import {v4 as uuid} from 'uuid';

export default class InfermierjaStore{
    infermierjaRegistry = new Map<string, Infermierja>();
    selectedInfermierja: Infermierja | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this)
    }

    get infermjeretByDate(){
        return Array.from(this.infermierjaRegistry.values()).sort((a, b) =>
         Date.parse(a.datelindja) - Date.parse(b.datelindja));
    }

    loadInfermjeret = async () => { 
        try{
            const infermjeret = await agent.Infermjeret.list();
                infermjeret.forEach(infermierja => {
                    infermierja.datelindja = infermierja.datelindja.split('T')[0];
                    this.infermierjaRegistry.set(infermierja.id, infermierja);
            })
            this.setLoadingInitial(false); 
        }catch(error){
            console.log(error);
            this.setLoadingInitial(false); 
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectInfermierja = (id: string) => {
        this.selectedInfermierja = this.infermierjaRegistry.get(id);
    }

    cancelSelectedActivity = () => {
        this.selectedInfermierja = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectInfermierja(id) : this.cancelSelectedActivity();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createInfermierja = async (infermierja: Infermierja) => {
        this.loading = true;
        infermierja.id = uuid();
        try {
            await agent.Infermjeret.create(infermierja);
            runInAction(() =>{
                this.infermierjaRegistry.set(infermierja.id, infermierja);
                this.selectedInfermierja = infermierja;
                this.editMode = false;
                this.loading = false;
            })
        }catch(error){
            console.log(error);
            runInAction(() =>{
                this.loading = false;
            })
        }
    }

    updateInfermierja = async (infermierja: Infermierja) => {
        this.loading = true;
        try{
            await agent.Infermjeret.update(infermierja);
            runInAction(() =>{
                this.infermierjaRegistry.set(infermierja.id, infermierja);
                this.selectedInfermierja = infermierja;
                this.editMode = false;
                this.loading = false;
            })
        }catch(error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteInfermierja = async (id: string) => {
        this.loading = true;
        try{
            await agent.Infermjeret.delete(id);
            runInAction(() => {
                this.infermierjaRegistry.delete(id);
                if(this.selectedInfermierja?.id ===id) this.cancelSelectedActivity();
                this.loading = false;
            })

        }catch(error){
            console.log(error);
            runInAction(() =>{
                this.loading = false;
            })
            
        }
    }
}