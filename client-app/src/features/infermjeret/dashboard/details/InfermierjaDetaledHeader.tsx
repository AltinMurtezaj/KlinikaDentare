import { observer } from 'mobx-react-lite';
import React from 'react'
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react'
import { Infermierja } from '../../../../app/layout/models/infermierja';

const infermierjaImageStyle = {
    filter: 'brightness(30%)'
};

const infermierjaImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    infermierja: Infermierja
}

export default observer (function InfermierjaDetailedHeader({infermierja}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/${infermierja.kualifikimi}.jpg`} fluid style={infermierjaImageStyle}/>
                <Segment style={infermierjaImageTextStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={infermierja.emri}
                                    style={{color: 'white'}}
                                />
                                <p>{infermierja.emri}</p>
                                <p>
                                    Hosted by <strong>Altin & Safet</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button color='teal'>Join Infermierja</Button>
                <Button>Cancel attendance</Button>
                <Button color='orange' floated='right'>
                    Manage Infermierja
                </Button>
            </Segment>
        </Segment.Group>
    )
})