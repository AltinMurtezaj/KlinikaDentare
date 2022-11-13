import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Infermierja } from "../../../../app/layout/models/infermierja";


interface Props {
    infermierja: Infermierja | undefined;
    closeForm: () => void;
    createOrEdit: (infermierja: Infermierja) => void;
    submitting: boolean;
}

export default function InfermierjaForm ({infermierja: selectedInfermierja, closeForm, createOrEdit, submitting}: Props){
    
    const initialState = selectedInfermierja ?? {
        id: '',
        emri: '',
        datelindja: '',
        kualifikimi: '',
        specializimi: '',
        vendbanimi: '',
        nrKontaktues: ''
    }

    const [infermierja, setInfermierja] = useState(initialState);

    function handleSubmit(){
        createOrEdit(infermierja);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const{name, value} = event.target;
        setInfermierja({...infermierja, [name]: value})
    }


    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Emri' value={infermierja.emri} name='emri' onChange={handleInputChange} />
                <Form.Input type="date" placeholder='Datelindja' value={infermierja.datelindja} name='datelindja' onChange={handleInputChange} />
                <Form.Input placeholder='Kualifikimi' value={infermierja.kualifikimi} name='kualifikimi' onChange={handleInputChange} />
                <Form.Input placeholder='Specializimi' value={infermierja.specializimi} name='specializimi' onChange={handleInputChange} />
                <Form.Input placeholder='Vendbanimi' value={infermierja.vendbanimi} name='vendbanimi' onChange={handleInputChange} />
                <Form.Input placeholder='nrKontaktues' value={infermierja.nrKontaktues} name='nrKontaktues' onChange={handleInputChange} />
                <Button loading={submitting} floated='right' positive type ='submit' content='Submit'/>
                <Button onClick={closeForm} floated='right' type ='button' content='Cancel'/>
            </Form>
        </Segment>
    )
}