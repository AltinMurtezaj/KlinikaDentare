import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid, List } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import PacientiFilters from './PacientiFilters';
import PacientiList from './PacientiList';

export default observer( function PacientiDashboard () {
    const {pacientiStore} = useStore();
    const {loadPacientet, pacientiRegistry} = pacientiStore;
  

    useEffect(() => {
     if(pacientiRegistry.size <= 1) loadPacientet();
    }, [pacientiRegistry.size, loadPacientet])
  
  if(pacientiStore.loadingInitial) return <LoadingComponent content='Loading infermjeret...'/>
    return (
        <Grid>
            <Grid.Column width='10'>
                <PacientiList />
            </Grid.Column>
            <Grid.Column width ='6'>
                <PacientiFilters />
            </Grid.Column>
        </Grid>
    )

})