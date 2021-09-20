import React from "react";
import "./header.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "./logo.png";
import logo2 from "./logo2.png";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import icon5 from "./icon5.png";

const Header = () => {
  return (
    <>
      <div className="Header">
        <Navbar>
          <Navbar.Brand>
            <img src={logo} width="150px" height="50px" alt="" />
          </Navbar.Brand>{" "}
          <div className="NavDropdown">
            <NavDropdown
              title={<img src={icon1} width="100px" height="50px" alt="" />}
            >
              <NavDropdown.Item href="#Auckland/Jordan">
                Jordan
              </NavDropdown.Item>
              <NavDropdown.Item href="#Auckland/Egypt">Egypt</NavDropdown.Item>
              <NavDropdown.Item href="#Auckland/Italy">Italy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Auckland/Tunis">Tunis</NavDropdown.Item>
            </NavDropdown>
            <div className="navLink">
            <Nav.Link href="">
              <img src={icon2} width="50px" height="40px" alt="" />
            </Nav.Link>
            <Nav.Link href="">
              <img src={icon3} width="60px" height="50px" alt="" />
            </Nav.Link>
            <NavDropdown
              title={<img src={icon4} width="50px" height="40px" alt="" />}
            >
              <NavDropdown.Item href="#">My Account</NavDropdown.Item>
              <NavDropdown.Item href="#">Gifts</NavDropdown.Item>
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              <img src={icon5} width="100px" height="50px" alt="" />
            </Nav.Link>
            <Nav.Link href="#">
              <img src={logo2} width="100px" height="50px" alt="" />
            </Nav.Link>
          </div></div>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
