import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react'
import {format} from 'date-fns';
import { Laboranti } from '../../../app/models/laboranti';

const pacientiImageStyle = {
    filter: 'brightness(30%)'
};

const laborantiImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    laboranti: Laboranti
}

export default observer (function LaborantiDetailedHeader({laboranti}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/${laboranti.emri}.jpg`} fluid style={laborantiImageTextStyle}/>
                <Segment style={laborantiImageTextStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={laboranti.emri}
                                    style={{color: 'white'}}
                                />
                                <p>{format (laboranti.datelindja!, 'dd MMM yyyy')}</p>
                                <p>
                                    Hosted by <strong>Altin & Safet</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button color='teal'>Join Pacienti</Button>
                <Button>Cancel attendance</Button>
                <Button as={Link} to={`/manage/${laboranti.id}`} color='orange' floated='right'>
                    Manage Laboranti
                </Button>
            </Segment>
        </Segment.Group>
    )
})