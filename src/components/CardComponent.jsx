import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CardComponent = ({ imageUrl, clas }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img className={clas} variant="top" src={imageUrl} />
            </Card>
        </div>
    )
}

export default CardComponent
