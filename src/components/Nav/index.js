import React from "react";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown ,InputGroup,FormControl} from "react-bootstrap";
import { MDBCol } from "mdbreact";
import{FiSearch} from "react-icons/fi"

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
              <MDBCol md="6">
              
              <InputGroup className="Search-bar">
            <InputGroup.Text id="basic-addon1">
              <FiSearch className="search-icon"></FiSearch>
            </InputGroup.Text>
            <FormControl
              placeholder="Search GrabOne"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
              </MDBCol>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavaBar;
