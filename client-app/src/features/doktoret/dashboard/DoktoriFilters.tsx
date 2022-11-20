import React from 'react';
import { Calendar } from 'react-calendar';

import { Header, Menu } from 'semantic-ui-react';



export default function DoktoriFilters(){
    return (
        <>
            <Menu vertical size='large' style={{width:'100'}}>
                <Header icon='filter' attached color ='teal' content='Filters'/>
                <Menu.Item content='All Doctors' />
                <Menu.Item content="Im going" />
                <Menu.Item content="I'm hosting" />
            </Menu>
            <Header />
            <Calendar/>
        </>
    )
        
}