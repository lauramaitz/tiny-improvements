import React from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";

const KudosForm = props => (
    <Form>
        <FormGroup>
            <Label>Who do you want to thank?</Label>
            <Input type="select" onChange={props.updateKudosReceiver} value={props.receiver}>
                <option>--Select User--</option>
                {props.user.map((user, index) =>
                    <option key={index}>{user.name}</option>
                )}
            </Input>
        </FormGroup>
        <FormGroup>
            <Label>From:</Label>
            <Input
                type="select"
                placeholder="My Name"
                onChange={props.updateKudosSender}
                value={props.sender}>
                <option>--Select User--</option>
                {props.user.map((user, index) =>
                    <option key={index}>{user.name}</option>
                )}
            </Input>
        </FormGroup>
        <FormGroup>
            <Input
                type="text"
                placeholder="Subject"
                onChange={props.updateKudosTitle}
                value={props.title}
            />
        </FormGroup>
        <FormGroup>
            <Input
                type="textarea"
                placeholder="Type your thanks message here..."
                onChange={props.updateKudosText}
                value={props.text}
            />
        </FormGroup>
    </Form>
)

export default KudosForm;