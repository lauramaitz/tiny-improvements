import React from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";

const PetCard = props => (
    <div>
        <Card>
            <CardBody>
                <h1>{props.name}</h1>
                <p>Age: {props.age}</p>
            </CardBody>
        </Card>
    </div>
)

export default PetCard;