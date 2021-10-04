import React from "react";
import "./main.css";
import Card from "react-bootstrap/Card";
import { MDBCol, MDBRow } from "mdbreact";
import main1 from "./main1.jpg";
import { Sidebar } from "react-sidebar-ui";
import { category } from "../Category/db";

function Main(props) {
  return (
    <div className="Main">
      <MDBRow>
        <MDBCol md="3">
          <Sidebar className="Sidebar" bgColor="light" isCollapsed={false}>
            <h4>
              Discover
            </h4>
            <hr />
            <ul className="Sidebar-discover">
              {category.map((elem, index) => {
                return <li key={index}> {elem} </li>;
              })}
            </ul>
          </Sidebar>
        </MDBCol>
        <MDBCol style={{ width: "32rem", height: "35rem" }} md="4">
          <Card style={{ width: "31rem", height: "29rem" }}>
            <Card.Img variant="top" src={main1} />
            <Card.Body>
              <Card.Title style={{ fontSize: ".9rem" }}>
                6 Bottles of Italian Sparkling Limoncello
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </MDBCol>{" "}
        <MDBCol
          className="mainCard"
          style={{ width: "32rem", height: "35rem" }}
          md="4"
        >
          <Card style={{ width: "31rem", height: "29rem" }}>
            <Card.Img
              variant="top"
              src="https://main-cdn.grabone.co.nz/goimage/495x343/6009bcbb5ab263035368b7d3fd11b64f45353e8b.jpg"
            />
            <Card.Body>
              <Card.Title style={{ fontSize: ".9rem" }}>
                HelloFresh Special Offer
              </Card.Title>
              <Card.Text style={{ color: "#01b2ee", fontSize: "0.75rem" }}>
                HelloFresh
              </Card.Text>
            </Card.Body>
          </Card>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Main;
