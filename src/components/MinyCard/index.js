import React from "react";
import {Button,Card,Badge} from "react-bootstrap";
import { RiHeartAddLine } from "react-icons/ri";
import './MinyCard.css';

export default function MinyCard(props) {
  const { item } = props;
  return (
    <Card className="class-card">
    <Card.Img variant="top" src={item.Image} ></Card.Img>
    <Card.Body>
    <Badge bg="secondary"><RiHeartAddLine></RiHeartAddLine></Badge>
      <Card.Title className="card-title"><h3 className="small-card-title">{item.Title}</h3></Card.Title>
      <Card.Subtitle>
        {item.Provider ? <h4 className="card-provider">{item.Provider}</h4> : <br />}
      </Card.Subtitle>
      <Card.Text>{item.City ? <h4 className="card-city">{item.City}</h4> : <br />}</Card.Text>
      {item.button ? <Button>View collection</Button> : null}
    </Card.Body>
    <Card.Footer>{item.price ? item.price + "$" : <br />}</Card.Footer>
  </Card>

   )};

