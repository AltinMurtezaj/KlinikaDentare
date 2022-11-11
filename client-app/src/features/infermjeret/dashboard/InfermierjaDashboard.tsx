import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Infermierja } from '../../../app/layout/models/infermierja';
import InfermierjaDetails from './details/InfermierjaDetails';
import InfermierjaForm from './form/InfermierjaForm';
import InfermjeretList from './InfermjeretList';

interface Props {
    infermjeret: Infermierja[];
    selectedInfermierja: Infermierja | undefined;
    selectInfermierja: (id: string) => void;
    cancelSelectInfermierja: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
}

export default function InfermierjaDashboard ({infermjeret, selectedInfermierja,
     selectInfermierja, cancelSelectInfermierja, editMode, openForm, closeForm}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <InfermjeretList infermjeret={infermjeret} selectInfermierja={selectInfermierja} />
            </Grid.Column>
            <Grid.Column width ='6'>
                {selectedInfermierja && !editMode &&
                <InfermierjaDetails 
                infermierja={selectedInfermierja} 
                cancelSelectInfermierja={cancelSelectInfermierja}
                openForm={openForm}
                />}
                {editMode &&
                <InfermierjaForm closeForm={closeForm} infermierja={selectedInfermierja}/>}
            </Grid.Column>
        </Grid>
    )

}