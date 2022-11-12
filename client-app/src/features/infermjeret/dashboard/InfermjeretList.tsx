import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { Infermierja } from "../../../app/layout/models/infermierja";

interface Props{
    infermjeret: Infermierja[];
    selectInfermierja: (id: string) => void;
    deleteInfermierja: (id: string) => void;
    submitting: boolean;
}

export default function InfermjeretList({infermjeret, selectInfermierja, deleteInfermierja, submitting}: Props){
    const[target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(e.currentTarget.name);
        deleteInfermierja(id);
    }
    return(
        <Segment>
            <Item.Group divided>
                {infermjeret.map(infermierja => (
                    <Item key={infermierja.id}>
                        <Item.Content>
                            <Item.Header as='a'>{infermierja.emri}</Item.Header>
                            <Item.Meta>{infermierja.datelindja}</Item.Meta>
                            <Item.Description>
                                <div>{infermierja.kualifikimi}</div>
                                <div>{infermierja.specializimi}, {infermierja.vendbanimi}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={()=>selectInfermierja(infermierja.id)} floated='right' content='View' color='blue' />
                                <Button
                                name={infermierja.id}
                                loading={submitting && target === infermierja.id} 
                                onClick={(e)=>handleActivityDelete(e, infermierja.id)}
                                floated='right'
                                content='Delete'
                                color='red' />
                                <Label basic content = {infermierja.nrKontaktues}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}