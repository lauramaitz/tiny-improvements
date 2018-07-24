import React, { Component } from "react";
import { Col, Container, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import AwardCard from "./components/AwardCard";
import VoteForm from "./components/VoteForm";
import KudosForm from "./components/KudosForm";
import PetCard from "./components/PetCard";
import axios from "axios";

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
      users: [],
      awards: [
        {
          id: 1,
          title: "Best Boss Award!",
          comment: "Thanks for always looking out for us.",
          sender: "Fabian",
          receiver: "Leon"
        },
        {
          id: 2,
          title: "Longest Commute Award!",
          comment: "I can't believe Laura makes it to work as often as she does.",
          sender: "Archit",
          receiver: "Laura"
        },
        {
          id: 3,
          title: "Most likely to nap at work!",
          comment: "Maybe you need more coffee.",
          sender: "Gobi",
          receiver: "Owen"
        }
      ],
      pets: []
    }
  }

  componentDidMount = () => {
    axios.get("/api/users")
      .then(response => {
        this.setState({ users: response.data })
      })
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
            {
              this.state.awards.map(award => <AwardCard id={award.id} title={award.title} comment={award.comment} receiver={award.receiver} />)
            }
          </Col>
        </Row>
        <hr />
        <h1>Give Kudos!</h1>
        {
          this.state.users.map(user => <KudosForm user={user.name} />)
        }
        <br />
        {
          this.state.pets.map(pet => <PetCard name={pet.name} age={pet.age} />)
        }
      </Container>
    );
  }
}

export default App;