import { observable, observe } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Image} from "semantic-ui-react";
import LoadingComponent from "../../../../app/layout/LoadingComponents";
import { useStore } from "../../../../app/stores/store";

export default observer(function InfermierjaDetails(){
    const {infermierjaStore} = useStore();
    const {selectedInfermierja: infermierja, loadInfermierja, loadingInitial} = infermierjaStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
      if(id) loadInfermierja(id);
    }, [id, loadInfermierja]);

    if(loadingInitial || !infermierja) return <LoadingComponent content={""} />;

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
        <Button as={Link} to={`/manage/${infermierja.id}`} basic color='blue' content='Edit'/>
        <Button as={Link} to={'/infermjeret'} basic color='grey' content='Cancel'/>
      </Button.Group> 
    </Card.Content>
  </Card>
    )
})