import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Col, Container, Row, Button, Form, FormGroup, Label, Input, Card, CardBody } from "reactstrap";
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
      KudosSender: "",
      modal: false
    }
    this.toggle = this.toggle.bind(this);
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
    this.toggle()
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <br />
            <h1>Tiny Improvements</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="3">
            <Card body className="text-center">
              <CardBody>
                <Button color="success" onClick={this.toggle}>Give Kudos!</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>
                    <h1>Give Kudos!</h1>
                  </ModalHeader>
                  <ModalBody>
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
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onClick={this.postKudos}>Submit</Button>{' '}
                    <Button color="danger" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </CardBody>
            </Card>
          </Col>
          <Col md="9">
            {
              this.state.awards.map((award, index) => <AwardCard key={index} id={award.id} title={award.title} comment={award.comment} receiver={award.receiver} sender={award.sender} />)
            }
          </Col>
        </Row>
        <hr />
        <br />
      </Container >
    );
  }
}

export default App;