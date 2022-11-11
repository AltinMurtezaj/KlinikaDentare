import React from "react";
import { Button, Card, Image} from "semantic-ui-react";
import { Infermierja } from "../../../../app/layout/models/infermierja";

interface Props {
    infermierja: Infermierja;
    cancelSelectInfermierja: () => void;
    openForm: (id: string) => void;
}

export default function InfermierjaDetails({infermierja, cancelSelectInfermierja, openForm}: Props){
    return (
    <Card fluid>
    <Image src={`/assets/2bc69970-9a38-43f1-b196-252f32cb6144/${infermierja.emri}.jpg`}/>
    <Card.Content>
        <Card.Header>{infermierja.emri}</Card.Header>
        <Card.Meta>
            <span>{infermierja.kualifikimi}</span>
        </Card.Meta>
        <Card.Description>
            {infermierja.datelindja}
        </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button.Group widths='2'>
        <Button onClick={() => openForm(infermierja.id)} basic color='blue' content='Edit'/>
        <Button onClick={cancelSelectInfermierja} basic color='grey' content='Cancel'/>
      </Button.Group> 
    </Card.Content>
  </Card>
    )
}