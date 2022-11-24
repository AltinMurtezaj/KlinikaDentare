import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react'
import {format} from 'date-fns';
import { Terapisti } from '../../../app/models/terapisti';

const terapistiImageStyle = {
    filter: 'brightness(30%)'
};

const terapistiImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    terapisti: Terapisti
}

export default observer (function TerapistiDetailedHeader({terapisti}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/${terapisti.emri}.jpg`} fluid style={terapistiImageStyle}/>
                <Segment style={terapistiImageStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={terapisti.emri}
                                    style={{color: 'white'}}
                                />
                                <p>{format (terapisti.datelindja!, 'dd MMM yyyy')}</p>
                                <p>
                                    Hosted by <strong>Altin & Safet</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button color='teal'>Join Therapist</Button>
                <Button>Cancel attendance</Button>
                <Button as={Link} to={`/manage/${terapisti.id}`} color='orange' floated='right'>
                    Manage Therapist
                </Button>
            </Segment>
        </Segment.Group>
    )
})