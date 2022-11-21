import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react';
import {format} from 'date-fns';
import { Termini } from '../../../app/models/termini';


const terminiImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    termini: Termini
}

export default observer (function TerminiDetailedHeader({termini}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Segment style={terminiImageTextStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={termini.emri}
                                    style={{color: 'white'}}
                                />
                                <p>{format (termini.data!, 'dd MMM yyyy')}</p>
                                <p>
                                    Hosted by <strong>Altin & Safet</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button color='teal'>Join Termini</Button>
                <Button>Cancel attendance</Button>
                <Button as={Link} to={`/manage/${termini.id}`} color='orange' floated='right'>
                    Manage Termini
                </Button>
            </Segment>
        </Segment.Group>
    )
})