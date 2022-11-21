import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react'
import {format} from 'date-fns';
import { Pacienti } from '../../../app/models/pacienti';

const pacientiImageStyle = {
    filter: 'brightness(30%)'
};

const pacientiImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    pacienti: Pacienti
}

export default observer (function PacientiDetailedHeader({pacienti}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/${pacienti.emri}.jpg`} fluid style={pacientiImageStyle}/>
                <Segment style={pacientiImageStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={pacienti.emri}
                                    style={{color: 'white'}}
                                />
                                <p>{format (pacienti.datelindja!, 'dd MMM yyyy')}</p>
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
                <Button as={Link} to={`/manage/${pacienti.id}`} color='orange' floated='right'>
                    Manage Pacienti
                </Button>
            </Segment>
        </Segment.Group>
    )
})