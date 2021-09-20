import React from "react";
import "./main.css";
import Card from "react-bootstrap/Card";
import { MDBCol, MDBRow } from "mdbreact";
import main1 from "./main1.jpg";
import { Sidebar, Item } from "react-sidebar-ui";

function Main() {
  return (
    <div className="Main">
      <MDBRow>
        <MDBCol md="3">
          <Sidebar className="Sidebar" bgColor="light" isCollapsed={false}>
            <h4
              style={{
                color: "#01b2ee",
                textAlign: "left",
                fontWeight: "700",
                padding: "5px",
              }}
            >
              Discover
            </h4>
            <hr />
            <Item bgColor="light">Featured Auckland deals</Item>
            <Item bgColor="light">Collections</Item>
            <Item bgColor="light">Escapes</Item>
            <Item bgColor="light">Picked for You</Item>
            <Item bgColor="light">Activities, Events & Outdoors</Item>
            <Item bgColor="light">Store</Item>
            <Item bgColor="light">Restaurants, Bars, Cafes</Item>
            <Item bgColor="light">Beauty, Massage & Spa</Item>
            <Item bgColor="light">House & Garden</Item>
            <Item bgColor="light">Fitness & Sports</Item>
            <Item bgColor="light">Automotive</Item>
          </Sidebar>
        </MDBCol>
      
        <MDBCol  style={{ width: "32rem", height: "35rem" }} md="4">
          <Card style={{ width: "31rem", height: "29rem" }} >
            <Card.Img variant="top" src={main1} />
            <Card.Body>
              <Card.Title style={{ fontSize: ".9rem" }}>
                6 Bottles of Italian Sparkling Limoncello
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </MDBCol>{" "}
        <MDBCol className="mainCard" style={{ width: "32rem", height: "35rem" }} md="4">
          <Card style={{ width: "31rem", height: "29rem" }}  >
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
