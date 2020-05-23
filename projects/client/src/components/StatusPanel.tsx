import React, { FC } from 'react'
import { Card, Container } from 'react-bootstrap'

import Listing from '@interfaces/Listing'
import AddClass from './AddClass'

interface StatusPanelProps {
    statuses: Listing[]
}
export const StatusPanel: FC<StatusPanelProps> = ({ statuses }) => {
    const openCount = statuses.filter(status => status.seatsAvailable > 0).length

    return (
        <Container className="statuses">
            <Card>
                <Card.Body>
                    <Card.Title>
                        You are currently tracking {statuses.length}{' '}
                        {statuses.length === 1 ? 'class' : 'classes'}!
                    </Card.Title>
                </Card.Body>
            </Card>
            <hr />
            <Card>
                <Card.Body>
                    <Card.Title>
                        There {openCount === 1 ? 'is' : 'are'} {openCount}{' '}
                        {openCount === 1 ? 'class' : 'classes'} open!
                    </Card.Title>
                </Card.Body>
            </Card>
            <hr />
            <AddClass />
        </Container>
    )
}

export default StatusPanel