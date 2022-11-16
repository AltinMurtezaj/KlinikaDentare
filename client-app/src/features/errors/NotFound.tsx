import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Segment, SegmentInline } from 'semantic-ui-react';

export default function NotFound() {
    return(
        <Segment>
            <Header icon>
                <Icon name='search' />
                     Oops - we've looked everywhere and could not find this.
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/infermjeret' primary>
                     Return to infermjeret page
                </Button>
            </Segment.Inline>
        </Segment>

    )

}