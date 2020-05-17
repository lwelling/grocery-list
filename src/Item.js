import React from 'react';
import { Accordion, Card, Button, Image, Table } from 'react-bootstrap';

export default function Item ({ item }) {
return (
    <div className="item-container">
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <Image src={item.url} fluid />
                    </Accordion.Toggle>
                </Card.Header>
            <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <h1>
                            {item.prettyName}
                        </h1>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ingredient</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                item.ingredients.map(function(item, i){ 
                                    return <tr className="ingredients" key={i} item={item}>
                                        <td>{item.quantity} {item.units}</td> 
                                        <td>{item.prettyName}</td> 
                                    </tr>
                                })
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
            </Accordion.Collapse>
            </Card>
        </Accordion>
    </div>
    )
};
