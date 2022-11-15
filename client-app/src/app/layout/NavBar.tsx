import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import InfermierjaStore from '../stores/infermierjaStore';
import { useStore } from '../stores/store';


export default function NavBar(){

    const {infermierjaStore} = useStore();
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src ="assets/logo.png" alt ="logo" style={{marginRight: '10px'}}/>
                    Klinika Dentare
                </Menu.Item>
                <Menu.Item name ='Infermjeret' />
                <Menu.Item>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={() => infermierjaStore.openForm()} positive content='Create Infermierja'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}