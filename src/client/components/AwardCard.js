import React from "react";
import { Media, Card, CardBody } from "reactstrap";

const AwardCard = props => (
  <div>
    <Card>
      <CardBody>
        <Media left href="#">
          <Media object src="https://developer.salesforce.com/resource/images/trailhead/badges/modules/trailhead_module_lightning_experience_basics.png" width="80px" alt="badge" />
        </Media>
        <Media body>
          <Media heading>
            <h2> {props.title} </h2>
          </Media>
          <h6 className="text-muted">To: {props.receiver}</h6>
          <h6 className="text-muted">From: {props.sender}</h6>
          <p> {props.text} </p>
        </Media>
      </CardBody>
    </Card>
    <br />
  </div>
)

export default AwardCard;