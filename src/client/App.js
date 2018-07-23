import React, { Component } from "react";
import { Col, Container, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import AwardCard from "./components/AwardCard";
import NameCard from "./components/NameCard";

class App extends Component {

  constructor() {
    super();
    this.state = {
      restaurants: [
        {
          name: 'Maialino',
          genre: 'Italian',
          score: 4.4
        },
        {
          name: 'Beyond Sushi',
          genre: 'Vegan',
          score: 4.7
        },
        {
          name: 'Abyssinia',
          genre: 'Ethiopian',
          score: 4.5
        },
        {
          name: 'La Roja de Todos',
          genre: 'Chilean',
          score: 4.5
        }
      ],
      students: [
        {
          name: "Alia",
          userId: 10457,
          position: "Solution Engineer",
        },
        {
          name: "Cody",
          userId: 10850,
          position: "Senior Functional Consultant"
        },
        {
          name: "Ana",
          userId: 10222,
          position: "Lead Solutions Engineer"
        }
      ],
      users: [
        {
          userId: 45089,
          name: "Owen",
          position: "Captian of the Breakroom"
        },
        {
          userId: 223,
          name: "Brooke",
          position: "Winner of All Dance-Offs"
        },
        {
          userId: 6582,
          name: "Gobi",
          position: "King of Mid-Day Naps"
        }
      ],
      awards: [
        {
          id: 1,
          title: "Best Boss Award!",
          comment: "Thanks for always looking out for us."
        },
        {
          id: 2,
          title: "Longest Commute Award!",
          comment: "I can't believe Leslie makes it to work as often as she does."
        },
        {
          id: 3,
          title: "Most likely to nap at work!",
          comment: "Maybe you need more coffee."
        }
      ]
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h1>Tiny Progress</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" lg="3">
            <Button color="success">Give Kudos</Button>
          </Col>
          <Col md="12" lg="9">
            {this.state.awards.map(award => <AwardCard id={award.id} title={award.title} comment={award.comment} />)}
          </Col>
        </Row>
        <hr />
        <h1>Give Kudos!</h1>
        <Row>
          <Col md="12">
            <Form>
              <FormGroup>
                <Label>Give Kudos to:</Label>
                <Input type="select">
                  {this.state.users.map(user => <option>{user.name}</option>)}
                  {this.state.students.map(student => <option>{student.name}</option>)}
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Kudos Title" />
              </FormGroup>
              <FormGroup>
                <Input type="textarea" placeholder="Kudos Text" />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        {this.state.users.map(user => <NameCard name={user.name} age={user.userId} />)}
        {this.state.students.map(student => <NameCard name={student.name} age={student.userId} />)}
      </Container>
    );
  }
}

export default App;