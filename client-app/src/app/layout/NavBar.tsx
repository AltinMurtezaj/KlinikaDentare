import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';




export default function NavBar(){

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src ="assets/logo.png" alt ="logo" style={{marginRight: '10px'}}/>
                    Klinika Dentare
                </Menu.Item>
                <Menu.Item as={NavLink} to='/infermjeret' name ='Infermjeret' />
                <Menu.Item as={NavLink} to='/errors' name='Errors' />
                <Menu.Item>
                    <Button as={NavLink} to='/createInfermjeret' positive content='Create Infermierja'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}