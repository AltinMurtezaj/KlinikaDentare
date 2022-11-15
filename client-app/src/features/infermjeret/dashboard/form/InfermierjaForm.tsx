import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../../app/layout/LoadingComponents";
import { useStore } from "../../../../app/stores/store";
import {v4 as uuid} from 'uuid';




export default observer( function InfermierjaForm (){
    const history = useHistory();
    const {infermierjaStore} = useStore();
    const {createInfermierja, updateInfermierja, loadInfermierja, 
    loading, loadingInitial} = infermierjaStore;
    const {id} = useParams<{id: string}>();

    const [infermierja, setInfermierja] = useState({
        id: '',
        emri: '',
        datelindja: '',
        kualifikimi: '',
        specializimi: '',
        vendbanimi: '',
        nrKontaktues: ''
    });

    useEffect(() => {
        if (id) loadInfermierja(id).then(infermierja => setInfermierja(infermierja!))
    }, [id, loadInfermierja]);

    function handleSubmit(){
        if(infermierja.id.length === 0){
            let newInfermierja = {
                ...infermierja,
                id: uuid()
            };
            createInfermierja(newInfermierja).then(() => history.push(`/infermjeret/${newInfermierja.id}`))
            }else{
                updateInfermierja(infermierja).then(() => history.push(`/infermjeret/${infermierja.id}`))
            }
        
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const{name, value} = event.target;
        setInfermierja({...infermierja, [name]: value})
    }


    if(loadingInitial) return <LoadingComponent content='Loading infermierja...' />

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Emri' value={infermierja.emri} name='emri' onChange={handleInputChange} />
                <Form.Input type="date" placeholder='Datelindja' value={infermierja.datelindja} name='datelindja' onChange={handleInputChange} />
                <Form.Input placeholder='Kualifikimi' value={infermierja.kualifikimi} name='kualifikimi' onChange={handleInputChange} />
                <Form.Input placeholder='Specializimi' value={infermierja.specializimi} name='specializimi' onChange={handleInputChange} />
                <Form.Input placeholder='Vendbanimi' value={infermierja.vendbanimi} name='vendbanimi' onChange={handleInputChange} />
                <Form.Input placeholder='nrKontaktues' value={infermierja.nrKontaktues} name='nrKontaktues' onChange={handleInputChange} />
                <Button loading={loading} floated='right' positive type ='submit' content='Submit'/>
                <Button as={Link} to='/infermjeret' floated='right' type ='button' content='Cancel'/>
            </Form>
        </Segment>
    )
})