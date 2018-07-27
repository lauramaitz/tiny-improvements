import React, { Component } from "react";
import { Col, Container, Row, Button, Form, FormGroup, Label, Input, Card, CardBody } from "reactstrap";
import AwardCard from "./components/AwardCard";
import KudosForm from "./components/KudosForm";
import axios from "axios";

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      awards: [],
      KudosText: "",
      KudosTitle: "",
      KudosReceiver: "",
      KudosSender: ""
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
  }

  updateKudosText = (event) => {
    this.setState({ KudosText: event.target.value });
  }

  updateKudosTitle = (event) => {
    this.setState({ KudosTitle: event.target.value });
  }

  updateKudosReceiver = (event) => {
    this.setState({ KudosReceiver: event.target.value });
  }

  updateKudosSender = (event) => {
    this.setState({ KudosSender: event.target.value });
  }

  postKudos = () => {
    axios.post("/api/kudos", {
      id: 0,
      title: this.state.KudosTitle,
      comment: this.state.KudosText,
      sender: this.state.KudosSender,
      receiver: this.state.KudosReceiver,
    }).then(response => {
      this.setState({
        awards: response.data
      })
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
          <Col md="12" lg="9">
            {
              this.state.awards.map((award, index) => <AwardCard key={index} id={award.id} title={award.title} comment={award.comment} receiver={award.receiver} sender={award.sender} />)
            }
          </Col>
        </Row>
        <hr />
        <h1>Give Kudos!</h1>
        <KudosForm
          user={this.state.users}
          KudosText={this.state.KudosText}
          KudosTitle={this.state.KudosTitle}
          KudosReceiver={this.state.KudosReceiver}
          KudosSender={this.state.KudosSender}
          updateKudosReceiver={this.updateKudosReceiver}
          updateKudosText={this.updateKudosText}
          updateKudosTitle={this.updateKudosTitle}
          updateKudosSender={this.updateKudosSender}
          postKudos={this.postKudos}
        />
        <br />

      </Container >
    );
  }
}

export default App;