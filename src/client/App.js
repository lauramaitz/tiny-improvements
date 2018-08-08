import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Col, Container, Row, Button, Form, FormGroup, Label, Input, Card, CardBody } from "reactstrap";
import AwardCard from "./components/AwardCard";
import KudosForm from "./components/KudosForm";
import axios from "axios";
import FilterForm from "./components/FilterForm";
import LeaderBoard from "./components/LeaderBoard";

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      awards: [],
      text: "",
      title: "",
      receiver: "",
      sender: "",
      modal: false,
      filterUser: "",
      filterUser2: "",
      leaderBoardData: []
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount = () => {
    axios.get("/api/users")
      .then(response => {
        this.setState({
          users: response.data,
          receiver: response.data[0].Name,
          sender: response.data[0].Name
        })
      })
    axios.get("/api/kudos")
      .then(response => {
        this.setState({ awards: response.data })
      })
    axios.get("/api/filter3/")
      .then(response => {
        this.setState({
          leaderBoardData: response.data
        })
      })
  }
  updateKudosText = (event) => {
    this.setState({ text: event.target.value });
  }
  updateKudosTitle = (event) => {
    this.setState({ title: event.target.value });
  }
  updateKudosReceiver = (event) => {
    this.setState({ receiver: event.target.value });
  }
  updateKudosSender = (event) => {
    this.setState({ sender: event.target.value });
  }
  updateFilter = event => {
    this.setState({ filterUser: event.target.value });
  }
  updateFilter2 = event => {
    this.setState({ filterUser2: event.target.value });
  }

  postKudos = () => {
    axios.post("/api/kudos", {
      Name: this.state.title,
      Comment__c: this.state.text,
      Receiver__c: this.state.users.find(user => user.name === this.state.receiver).id,
      Sender__c: this.state.users.find(user => user.name === this.state.sender).id
    }).then(response => {
      this.setState({ awards: response.data })
    })
    this.toggle()
  }

  getFilter = () => {
    axios.get("/api/filter/" + this.state.filterUser)
      .then(response => {
        this.setState({
          awards: response.data
        })
      })
  }
  getFilter2 = () => {
    axios.get("/api/filter2/" + this.state.filterUser2)
      .then(response => {
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
            <br />
            <Card body inverse color="primary" body className="text-center">
              <h1>Work.com 2.0</h1>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="3">
            <img src="https://blog.internetcreations.com/wp-content/uploads/2015/05/workdotcom-blog.png" width="240px" height="240px" />
            <br />
            <FilterForm
              user={this.state.users}
              updateFilter={this.updateFilter}
              updateFilter2={this.updateFilter2}
              getFilter={this.getFilter}
              getFilter2={this.getFilter2}
            />
            <br />
            <Card body className="text-center">
              <CardBody>
                <Button size="lg" color="primary" onClick={this.toggle}>Give Thanks!</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>
                    <h1>Give Thanks!</h1>
                  </ModalHeader>
                  <ModalBody>
                    <KudosForm
                      user={this.state.users}
                      text={this.state.text}
                      title={this.state.title}
                      receiver={this.state.receiver}
                      sender={this.state.sender}
                      updateKudosReceiver={this.updateKudosReceiver}
                      updateKudosText={this.updateKudosText}
                      updateKudosTitle={this.updateKudosTitle}
                      updateKudosSender={this.updateKudosSender}
                      postKudos={this.postKudos}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onClick={this.postKudos}>Submit</Button>{' '}
                    <Button color="danger" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </CardBody>
            </Card>
            <br />
            <LeaderBoard
              data={this.state.leaderBoardData}
            />
          </Col>
          <Col md="9">
            {
              this.state.awards.map((award, index) =>
                <AwardCard
                  key={index}
                  title={award.name}
                  text={award.comment__c}
                  receiver={award.receiver__r.Name}
                  sender={award.sender__r.Name}
                />)
            }
          </Col>
        </Row>
      </Container >
    );
  }
}

export default App;