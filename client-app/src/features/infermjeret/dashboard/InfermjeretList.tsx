import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Infermierja } from "../../../app/layout/models/infermierja";

interface Props{
    infermjeret: Infermierja[];
    selectInfermierja: (id: string) => void;
}

export default function InfermjeretList({infermjeret, selectInfermierja}: Props){
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
                                <Label basic content = {infermierja.nrKontaktues}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}