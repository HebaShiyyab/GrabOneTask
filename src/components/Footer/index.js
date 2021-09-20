import React from "react";
import "./footer.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import icon7 from "./icon7.png";
import icon8 from "./icon8.png";
import facIcon from "./facIcon.png";
import twetIcon from "./twetIcon.png";
import insIcon from "./insIcon.png";
import youIcon from "./youIcon.png";
import icon9 from "./icon9.png";

export default function Footer() {
  return (
    <div className="Footer">
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="3">
              <h6 className="title">Follow us on </h6>
              <a href="#!">
                <img src={facIcon} width="40px" height="40px" alt="" />
              </a>
              <a href="#!">
                <img src={twetIcon} width="40px" height="40px" alt="" />
              </a>
              <a href="#!">
                <img src={insIcon} width="40px" height="40px" alt="" />
              </a>
              <a href="#!">
                <img src={youIcon} width="40px" height="40px" alt="" />
              </a>
              <h6>Get app exclusive deals</h6>
              <Button variant="primary" size="lg">
                <img src={icon9} width="20px" height="30px" alt="" /> Download
                our App
              </Button>{" "}
            </MDBCol>
            <MDBCol md="2">
              <h5 className="title">GrabOne</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">GrabOne Guarantee</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Contact Us</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">About Us</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Terms & Returns</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Blog</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Gift Cards</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="2">
              <h5 className="title">My Account</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">My Account </a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">My Cart</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">My Coupons</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">FAQ</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="2">
              <h5 className="title">Merchants</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Run a Deal</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Merchant Centre</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title">Newsletter Signup</h5>
              <p>
                Sign up for our daily emails and we'll send you all the best
                deals, tailored for you.
              </p>
              <InputGroup className="mb-3">
                {/* <svg className="email-subscription__icon"><use xlink:href="#feather-mail"></use></svg> */}
                <FormControl
                  placeholder="Enter email address"
                  aria-label="Enter email address"
                  aria-describedby="basic-addon2"
                />
                <Button className="footerButton" variant="outline-secondary" id="button-addon2">
                  Subscribe
                </Button>
              </InputGroup>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <hr/>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid ="sm">
            <a href="">
              <img src={icon8} width="100px" height="50px" alt="" />
            </a>{" "}
            &copy; {new Date().getFullYear()} GrabOne Limited{" "}
            <a href="">
              <img src={icon7} width="190px" height="50px" alt="" />
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}
