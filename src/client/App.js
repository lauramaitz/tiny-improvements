import React, { Component } from "react";
import { Col, Container, Row, Button, Form, FormGroup, Label, Input, Card, CardBody } from "reactstrap";
import AwardCard from "./components/AwardCard";
import VoteForm from "./components/VoteForm";
import KudosForm from "./components/KudosForm";
import PetCard from "./components/PetCard";
import axios from "axios";

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      awards: []
    }
  }

  componentDidMount = () => {
    axios.get("/api/awards")
      .then(response => {
        this.setState({ awards: response.data })
      })
    axios.get("/api/users")
      .then(response => {
        this.setState({ users: response.data })
      })
    // todays class example
    axios.get("/api/friends")
      .then(response => {
        this.setState({ friends: response.data })
      })
  }
  postKudos = () => {
    axios.post("/api/kudos", {
      id: 5,
      title: "Fastest Typer Award",
      comment: "Have you seen how fast George types??"
    }).then(response => {
      this.setState({
        awards: response.data
      })
    })
  }

  updateKudos = event => {
    this.setState({ kudo: event.target.value });
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
          <Col md="12" lg="9">
            {
              this.state.awards.map((award, index) => <AwardCard key={index} id={award.id} title={award.title} comment={award.comment} receiver={award.receiver} />)
            }
          </Col>
        </Row>
        <hr />
        <h1>Give Kudos!</h1>
        <KudosForm
          postKudos={this.postKudos}
          user={this.state.users}
          kudos={this.state.kudos}
          updateKudos={this.updateKudos}
        />
        <br />

        {/* ERROR NOTES: BUTTON IS STILL PUSHING PREDEFINED VALUES, NOT NEW VALUES */}

      </Container>
    );
  }
}

export default App;