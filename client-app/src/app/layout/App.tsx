import React from 'react';
import {  Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import InfermierjaDashboard from '../../features/infermjeret/dashboard/InfermierjaDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import InfermierjaForm from '../../features/infermjeret/form/InfermierjaForm';
import TestErrors from '../../features/errors/TestError';
import {ToastContainer } from 'react-toastify';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';
import InfermierjaDetails from '../../features/infermjeret/details/InfermierjaDetails';

function App() {
  const location = useLocation();
  return (
    <>
    <ToastContainer position='bottom-right' hideProgressBar/>
     <Route exact path='/' component={HomePage}/>
     <Route 
     path={'/(.+)'}
      render={()=>(
        <>
        <NavBar />
        <Container style={{marginTop: '7em'}}>
          <Switch>
            <Route exact path='/infermjeret' component={InfermierjaDashboard}/>
            <Route path='/infermjeret/:id' component={InfermierjaDetails}/>
            <Route key={location.key}path={['/createInfermjeret','/manage/:id']} component={InfermierjaForm}/>
            <Route path='/errors' component={TestErrors}/>
            <Route path='/server-error' component={ServerError}/>
            <Route component={NotFound} />
          </Switch>
        </Container>
        </>
      )}
     />
    </>
  );
}

export default observer (App);
  