import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default observer(function InfermjeretList(){
    const {infermierjaStore} = useStore();
    const {deleteInfermierja, infermjeretByDate, loading} = infermierjaStore;

    const[target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(e.currentTarget.name);
        deleteInfermierja(id);
    }

    return(
        <Segment>
            <Item.Group divided>
                {infermjeretByDate.map(infermierja => (
                    <Item key={infermierja.id}>
                        <Item.Content>
                            <Item.Header as='a'>{infermierja.emri}</Item.Header>
                            <Item.Meta>{infermierja.datelindja}</Item.Meta>
                            <Item.Description>
                                <div>{infermierja.kualifikimi}</div>
                                <div>{infermierja.specializimi}, {infermierja.vendbanimi}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={()=>infermierjaStore.selectInfermierja(infermierja.id)} floated='right' content='View' color='blue' />
                                <Button
                                name={infermierja.id}
                                loading={loading && target === infermierja.id} 
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
})