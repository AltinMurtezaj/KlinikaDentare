import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid, List } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import DoktoriFilters from './DoktoriFilters';
import DoktoriList from './DoktoriList';




export default observer( function DoktoriDashboard () {
    const {doktoriStore} = useStore();
    const {loadDoktoret, doktoriRegistry} = doktoriStore;
  

    useEffect(() => {
     if(doktoriRegistry.size <= 1) loadDoktoret();
    }, [doktoriRegistry.size, loadDoktoret])
  
  if(doktoriStore.loadingInitial) return <LoadingComponent content='Loading doktoret...'/>
    return (
        <Grid>
            <Grid.Column width='10'>
                <DoktoriList />
            </Grid.Column>
            <Grid.Column width ='6'>
                <DoktoriFilters />
            </Grid.Column>
        </Grid>
    )

})