import { observer } from 'mobx-react-lite';
import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import InfermierjaDetails from './details/InfermierjaDetails';
import InfermierjaForm from './form/InfermierjaForm';
import InfermjeretList from './InfermjeretList';

export default observer( function InfermierjaDashboard () {

    const {infermierjaStore} = useStore();
    const {selectedInfermierja, editMode} = infermierjaStore;

    return (
        <Grid>
            <Grid.Column width='10'>
                <InfermjeretList />
            </Grid.Column>
            <Grid.Column width ='6'>
                {selectedInfermierja && !editMode &&
                <InfermierjaDetails/>}
                {editMode &&
                <InfermierjaForm />}
            </Grid.Column>
        </Grid>
    )

})