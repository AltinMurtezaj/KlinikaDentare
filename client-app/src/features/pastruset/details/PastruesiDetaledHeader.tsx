import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react'
import {format} from 'date-fns';
import { Pastruesi } from '../../../app/models/pastruesi';

const pastruesiImageStyle = {
    filter: 'brightness(30%)'
};

const pastruesiImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    pastruesi: Pastruesi
}

export default observer (function PastruesiDetailedHeader({pastruesi}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/${pastruesi.emri}.jpg`} fluid style={pastruesiImageStyle}/>
                <Segment style={pastruesiImageStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={pastruesi.emri}
                                    style={{color: 'white'}}
                                />
                                <p>{format (pastruesi.datelindja!, 'dd MMM yyyy')}</p>
                                <p>
                                    Hosted by <strong>Altin & Safet</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button color='teal'>Join Purifier</Button>
                <Button>Cancel attendance</Button>
                <Button as={Link} to={`/manage/${pastruesi.id}`} color='orange' floated='right'>
                    Manage Purifier
                </Button>
            </Segment>
        </Segment.Group>
    )
})