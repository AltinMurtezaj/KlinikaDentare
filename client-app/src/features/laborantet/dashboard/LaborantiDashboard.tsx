import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid, List } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import LaborantiFilters from './LaborantiFilters';
import LaborantiList from './LaborantiList';

export default observer( function LaborantiDashboard () {
    const {laborantiStore} = useStore();
    const {loadLaborantet, laborantiRegistry} = laborantiStore;
  

    useEffect(() => {
     if(laborantiRegistry.size <= 1) loadLaborantet();
    }, [laborantiRegistry.size, loadLaborantet])
  
  if(laborantiStore.loadingInitial) return <LoadingComponent content='Loading laborantet...'/>
    return (
        <Grid>
            <Grid.Column width='10'>
                <LaborantiList />
            </Grid.Column>
            <Grid.Column width ='6'>
                <LaborantiFilters />
            </Grid.Column>
        </Grid>
    )

})