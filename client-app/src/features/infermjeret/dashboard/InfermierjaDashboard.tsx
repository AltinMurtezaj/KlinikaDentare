import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid, List } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import InfermierjaFilters from './InfermierjaFilters';

import InfermjeretList from './InfermjeretList';

export default observer( function InfermierjaDashboard () {
    const {infermierjaStore} = useStore();
    const {loadInfermjeret, infermierjaRegistry} = infermierjaStore;
  

    useEffect(() => {
     if(infermierjaRegistry.size <= 1) loadInfermjeret();
    }, [infermierjaRegistry.size, loadInfermjeret])
  
  if(infermierjaStore.loadingInitial) return <LoadingComponent content='Loading infermjeret...'/>
    return (
        <Grid>
            <Grid.Column width='10'>
                <InfermjeretList />
            </Grid.Column>
            <Grid.Column width ='6'>
                <InfermierjaFilters />
            </Grid.Column>
        </Grid>
    )

})