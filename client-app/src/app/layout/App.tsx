import React, { Fragment, useEffect, useState } from 'react';
import { Container} from 'semantic-ui-react';
import { Infermierja } from './models/infermierja';
import NavBar from './NavBar';
import InfermierjaDashboard from '../../features/infermjeret/dashboard/InfermierjaDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponents';

function App() {
  const [infermjeret, setInfermjeret] = useState<Infermierja[]>([]);
  const [selectedInfermierja, setSelectedInfermierja] = useState<Infermierja | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  

  useEffect(() => {
   agent.Infermjeret.list().then(response =>{
     let Infermjeret: Infermierja[] = [];
     response.forEach(infermierja => {
      infermierja.datelindja = infermierja.datelindja.split(' ')[0];
      Infermjeret.push(infermierja);
     })

      setInfermjeret(response);
      setLoading(false);
    })
  }, [])

  function handleSelectInfermierja(id: string){
    setSelectedInfermierja(infermjeret.find(x => x.id === id));
  }

  function handleCancelSelectInfermierja(){
    setSelectedInfermierja(undefined);
  }

  function handleFormOpen(id?: string){
    id ? handleSelectInfermierja(id) : handleCancelSelectInfermierja();
    setEditMode(true);
  }

  function handeleFormClose(){
    setEditMode(false);
  }

  function handeleCreateOrEditInfermierja(infermierja: Infermierja){
    setSubmitting(true);
    if(infermierja.id){
      agent.Infermjeret.update(infermierja).then(()=>{
        setInfermjeret([...infermjeret.filter(x => x.id!== infermierja.id), infermierja])
        setSelectedInfermierja(infermierja);
        setEditMode(false);
        setSubmitting(false);
      })
    } else {
      infermierja.id = uuid();
      agent.Infermjeret.create(infermierja).then(() => {
        setInfermjeret([...infermjeret, infermierja]);
        setSelectedInfermierja(infermierja);
        setEditMode(false);
        setSubmitting(false);
      })
    }
  }

  function handleDeleteInfermierja(id: string){
    setSubmitting(true);
    agent.Infermjeret.delete(id).then(()=>{
      setInfermjeret([...infermjeret.filter(x => x.id !== id)]);
      setSubmitting(false);

    })
  }

if(loading) return <LoadingComponent content='Loading app'/>
  return (
    <Fragment>
        <NavBar openForm={handleFormOpen} />
    
        <Container style={{marginTop: '7em'}}>
          <InfermierjaDashboard 
          infermjeret ={infermjeret}
          selectedInfermierja={selectedInfermierja}
          selectInfermierja={handleSelectInfermierja}
          cancelSelectInfermierja={handleCancelSelectInfermierja}
          editMode = {editMode}
          openForm={handleFormOpen}
          closeForm = {handeleFormClose}
          createOrEdit={handeleCreateOrEditInfermierja}
          deleteInfermierja={handleDeleteInfermierja}
          submitting={submitting}
          />
        </Container>
    </Fragment>
  );
}

export default App;
