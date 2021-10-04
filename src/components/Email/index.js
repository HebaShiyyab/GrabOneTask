import React from "react";
import "./email.css";
import {InputGroup,FormControl,Button} from "react-bootstrap";
import { MDBCol, MDBRow } from "mdbreact";

function Featured() {
  return (
    <div className="Email">
      <MDBRow className="MDBrow">
        <MDBCol md="6">
          <p>
            Get the best deals delivered direct to your inbox each day
          </p>
        </MDBCol>
        <MDBCol md="6">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter email address"
              aria-label="Enter email address"
              aria-describedby="basic-addon2"
            />
            <Button className="emailButton" variant="outline-secondary" id="button-addon2">
             
               Subscribe
             
            </Button>
          </InputGroup>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Featured;
