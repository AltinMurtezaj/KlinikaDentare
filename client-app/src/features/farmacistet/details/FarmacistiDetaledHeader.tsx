import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react'
import {format} from 'date-fns';
import { Farmacisti } from '../../../app/models/farmacisti';

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
    farmacisti: Farmacisti
}

export default observer (function FarmacistiDetailedHeader({farmacisti}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/${farmacisti.emri}.jpg`} fluid style={pacientiImageStyle}/>
                <Segment style={pacientiImageStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={farmacisti.emri}
                                    style={{color: 'white'}}
                                />
                                <p>{format (farmacisti.datelindja!, 'dd MMM yyyy')}</p>
                                <p>
                                    Hosted by <strong>Altin & Safet</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button color='teal'>Join Farmacisti</Button>
                <Button>Cancel attendance</Button>
                <Button as={Link} to={`/manage/${farmacisti.id}`} color='orange' floated='right'>
                    Manage Pacienti
                </Button>
            </Segment>
        </Segment.Group>
    )
})