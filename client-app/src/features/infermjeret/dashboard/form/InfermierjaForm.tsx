import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../../app/layout/LoadingComponents";
import { useStore } from "../../../../app/stores/store";
import {v4 as uuid} from 'uuid';
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../../app/common/form/MyTextInput";
import MySelectInput from "./MySelectInput";
import { specializimiOptions } from "../../../../app/common/form/options/specializimiOptions";




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

    const validationSchema = Yup.object({
        emri: Yup.string().required('This field must need to be filled'),
        datelindja: Yup.string().required('This field must need to be filled'),
        kualifikimi: Yup.string().required('This field must need to be filled'),
        specializimi: Yup.string().required('This field must need to be filled'),
        vendbanimi: Yup.string().required('This field must need to be filled'),
        nrKontaktues: Yup.string().required('This field must need to be filled'),
    })

    useEffect(() => {
        if (id) loadInfermierja(id).then(infermierja => setInfermierja(infermierja!))
    }, [id, loadInfermierja]);

   /* function handleSubmit(){
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

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const{name, value} = event.target;
        setInfermierja({...infermierja, [name]: value})
    }
    */

    if(loadingInitial) return <LoadingComponent content='Loading infermierja...' />

    return(
        <Segment clearing>
            <Formik
                validationSchema ={validationSchema}
                enableReinitialize 
                initialValues={infermierja} 
                onSubmit={values => console.log(values)}>
                {({handleSubmit}) => (
                <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                    <MyTextInput name ='emri' placeholder='Emri' /> 
                    <MyTextInput placeholder='Datelindja' name='datelindja'/>
                    <MyTextInput placeholder='Kualifikimi' name='kualifikimi'/>
                    <MySelectInput options={specializimiOptions} placeholder='Specializimi' name='specializimi'/>
                    <MyTextInput placeholder='Vendbanimi' name='vendbanimi'/>
                    <MyTextInput placeholder='nrKontaktues' name='nrKontaktues'/>
                    <Button loading={loading} floated='right' positive type ='submit' content='Submit'/>
                    <Button as={Link} to='/infermjeret' floated='right' type ='button' content='Cancel'/>
                </Form>
                )}
            </Formik>
        </Segment>
    )
})