import React from "react";
import { Button, Card, CardBody, Form, FormGroup, Label, Input } from "reactstrap";

const FilterForm = props =>
    <Card>
        <CardBody>
            <h3>Find Badges:</h3>
            <br />
            <Form>
                <FormGroup>
                    <Label>Filter Badges by Recipient:</Label>
                    <Input type="select" onChange={props.updateFilter}>
                        <option>Please select a recipient!</option>
                        {props.user.map((user, index) =>
                            <option key={index}>{user.name}</option>)}
                    </Input>
                    <Button outline color="primary" onClick={props.getFilter}>Go!</Button>
                </FormGroup>
                <br />
                <FormGroup>
                    <Label>Filter Badges by Sender:</Label>
                    <Input type="select" onChange={props.updateFilter2}>
                        <option>Please select a sender!</option>
                        {props.user.map((user, index) =>
                            <option key={index}>{user.name}</option>)}
                    </Input>
                    <Button outline color="primary" onClick={props.getFilter2}>Go!</Button>
                </FormGroup>
            </Form>
        </CardBody>
    </Card>

export default FilterForm;