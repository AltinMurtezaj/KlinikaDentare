import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Infermierja } from './models/infermierja';
import NavBar from './NavBar';
import InfermierjaDashboard from '../../features/infermjeret/dashboard/InfermierjaDashboard';

function App() {
  const [infermjeret, setInfermjeret] = useState<Infermierja[]>([]);
  const [selectedInfermierja, setSelectedInfermierja] = useState<Infermierja | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  

  useEffect(() => {
    axios.get<Infermierja[]>('http://localhost:5000/api/infermjeret').then(response =>{
      setInfermjeret(response.data);
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
          />
        </Container>
    </Fragment>
  );
}

export default App;
