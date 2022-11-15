import React, { Fragment, useEffect } from 'react';
import {  Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import InfermierjaDashboard from '../../features/infermjeret/dashboard/InfermierjaDashboard';
import LoadingComponent from './LoadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {infermierjaStore} = useStore();

  

  useEffect(() => {
   infermierjaStore.loadInfermjeret();
  }, [infermierjaStore])

if(infermierjaStore.loadingInitial) return <LoadingComponent content='Loading app'/>
  return (
    <Fragment>
        <NavBar />
    
        <Container style={{marginTop: '7em'}}>
          <InfermierjaDashboard />
        </Container>
    </Fragment>
  );
}

export default observer (App);
