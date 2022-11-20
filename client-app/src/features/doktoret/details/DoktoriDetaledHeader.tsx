import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react';
import {format} from 'date-fns';
import { Doktori } from '../../../app/models/doktori';

const doktoriImageStyle = {
    filter: 'brightness(30%)'
};

const doktoriImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    doktori: Doktori
}

export default observer (function DoktoriDetailedHeader({doktori}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/${doktori.kualifikimi}.jpg`} fluid style={doktoriImageStyle}/>
                <Segment style={doktoriImageTextStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={doktori.emri}
                                    style={{color: 'white'}}
                                />
                                <p>{format (doktori.datelindja!, 'dd MMM yyyy')}</p>
                                <p>
                                    Hosted by <strong>Altin & Safet</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button color='teal'>Join Doktori</Button>
                <Button>Cancel attendance</Button>
                <Button as={Link} to={`/manage/${doktori.id}`} color='orange' floated='right'>
                    Manage Doktori
                </Button>
            </Segment>
        </Segment.Group>
    )
})