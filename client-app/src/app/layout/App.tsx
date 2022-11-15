import React from 'react';
import {  Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import InfermierjaDashboard from '../../features/infermjeret/dashboard/InfermierjaDashboard';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import InfermierjaForm from '../../features/infermjeret/dashboard/form/InfermierjaForm';
import InfermierjaDetails from '../../features/infermjeret/dashboard/details/InfermierjaDetails';

function App() {
  const location = useLocation();
  return (
    <>
     <Route exact path='/' component={HomePage}/>
     <Route 
     path={'/(.+)'}
      render={()=>(
        <>
        <NavBar />
        <Container style={{marginTop: '7em'}}>
         <Route exact path='/infermjeret' component={InfermierjaDashboard}/>
         <Route path='/infermjeret/:id' component={InfermierjaDetails}/>
         <Route key={location.key}path={['/createInfermjeret','/manage/:id']} component={InfermierjaForm}/>
        </Container>
        </>
      )}
     />
    </>
  );
}

export default observer (App);
  