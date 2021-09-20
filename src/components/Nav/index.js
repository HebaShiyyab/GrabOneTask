import React from "react";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";
// import { iconsSearch } from "./icons.png";

const NavaBar = () => {
  return (
    <>
      <div className="Nav">
        <Navbar
          // expanded="true"
          bg="light"
          sticky="top"
          expand="sm"
          collapseOnSelect
        >
          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav>
            <MDBCol md="3">
              <NavDropdown title="Browse Categories">
                <NavDropdown.Item href="#Browse Categories/tea">
                  Tea
                </NavDropdown.Item>
                <NavDropdown.Item href="#Browse Categories/coffee">
                  Coffee
                </NavDropdown.Item>
                <NavDropdown.Item href="#Browse Categories/chocolate">
                  Chocolate
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Browse Categories/promo">
                  Promo
                </NavDropdown.Item>
              </NavDropdown>
              </MDBCol>
              <MDBCol md="2">
              <Nav.Link href="#blog">What's New </Nav.Link></MDBCol>
              <MDBCol md="2">
              <Nav.Link href="#about-us">Trending</Nav.Link></MDBCol>
              <MDBCol md="2">
              <Nav.Link href="#contact-us">For You</Nav.Link></MDBCol>
              <MDBCol md="4">
              <Nav.Link href="#contact-us">Shop Products</Nav.Link></MDBCol>
              <MDBCol md="8">
                <MDBInput
                  hint="Search GrabOne"
                  type="text"
                  containerClass="active-pink active-pink-2 mt-0 mb-3"
                />
              </MDBCol>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavaBar;
