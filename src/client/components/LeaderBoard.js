import React from "react";
import { CardHeader, Table, Card, CardBody, Alert } from "reactstrap";

const LeaderBoard = props =>
    <Card body className="text-center">
        <CardBody>
            <Alert block color="primary">Leader Board</Alert>
            <Table hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>#Awards</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.sort((a, b) => b.expr0 - a.expr0)
                        .map((elem, index) =>
                            <tr key={index}>
                                <td>{elem.name}</td>
                                <td>{elem.expr0}</td>
                            </tr>
                        )}
                </tbody>
            </Table>
        </CardBody>
    </Card>


export default LeaderBoard;