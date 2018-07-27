import React from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";

const KudosForm = props => (
    <Form>
        <FormGroup>
            <Label>Give Kudos to:</Label>
            <Input type="select" onChange={props.updateKudosReceiver} value={props.KudosReceiver}>
                {props.user.map((user, index) =>
                    <option key={index}>{user.name}</option>
                )}
            </Input>
        </FormGroup>
        <FormGroup>
            <Label>Sender:</Label>
            <Input type="select" onChange={props.updateKudosSender} value={props.KudosSender}>
                {props.user.map((user, index) =>
                    <option key={index}>{user.name}</option>
                )}
            </Input>
        </FormGroup>
        <FormGroup>
            <Input
                type="text"
                placeholder="Kudos Title"
                onChange={props.updateKudosTitle}
                value={props.KudosTitle}
            />
        </FormGroup>
        <FormGroup>
            <Input
                type="textarea"
                placeholder="Kudos Text"
                onChange={props.updateKudosText}
                value={props.KudosText}
            />
        </FormGroup>
        <Button color="success" onClick={props.postKudos}> Give Kudos! </Button>
    </Form>
)

export default KudosForm;