import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { MDBCol, MDBRow } from "mdbreact";
import "./Category.css";
import Card from "react-bootstrap/Card";
const data = require("./db");

function Category() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="Category">
      {!show ? (
        <div className="all-Categories">
          <div className="card">
            <MDBRow>
              <MDBCol md="3">
                <h2>Featured Auckland deals</h2>
              </MDBCol>
              <MDBCol md="3">
                {" "}
                <Button
                  className="CategoriesButton"
                  variant="outline-secondary"
                  id="button-addon2"
                  size="sm"
                >
                  View More <i class="fa fa-angle-right "></i>
                </Button>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <div className="allCards">
                {data.map((elem, index) => {
                  if (elem.category === "Featured Auckland deals") {
                    return (
                      <div key={index} id={elem.id} className="allCard">
                        <Card className="cards">
                          <Card.Img variant="top" src={elem.img} />
                          {data.newTOSite ? "New TO Site" : " "}
                          <Card.Body>
                            <Card.Title>
                              <h3>
                                {" "}
                                {elem.title.replace(/^(.{20}[^\s]*).*/, "$1")}
                              </h3>

                              <h4>
                                {" "}
                                {elem.subTitle.replace(
                                  /^(.{20}[^\s]*).*/,
                                  "$1"
                                )}
                              </h4>
                              <h6>{elem.country}</h6>
                              <div className="overlay">
                                <div className="text"> {elem.title}</div>
                              </div>
                            </Card.Title>
                            <Card.Text className="cardText">
                              <h6>
                                {" "}
                                {elem.numberBough
                                  ? ` ${elem.numberBough} bought`
                                  : " "}
                              </h6>
                              <div className="price">
                                <span>{elem.price ? "Form" : " "} </span>
                                <br />
                                <h4>
                                  {elem.price ? ` $ ${elem.price} ` : " "}{" "}
                                </h4>
                              </div>
                            </Card.Text>
                            {elem.button ? (
                              <Button
                                className="cardButton"
                                variant="outline-secondary"
                                id="button-addon2"
                              >
                                View Collection
                              </Button>
                            ) : null}
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  }
                })}
              </div>
            </MDBRow>
          </div>
          <div className="card">
            <MDBRow>
              <MDBCol md="3">
                <h2 style={{ textAlign: "left" }}>Collections</h2>
              </MDBCol>
              <MDBCol md="3">
                {" "}
                <Button
                  className="CategoriesButton"
                  variant="outline-secondary"
                  id="button-addon2"
                >
                  View More
                </Button>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <div className="allCards">
                {data.map((elem, index) => {
                  if (elem.category === "Collections") {
                    return (
                      <div key={index} id={elem.id} className="allCard">
                        <Card className="cards">
                          <Card.Img variant="top" src={elem.img} />
                          {data.newTOSite ? "New TO Site" : " "}
                          <Card.Body>
                            <Card.Title>
                              <h3>
                                {" "}
                                {elem.title.replace(/^(.{20}[^\s]*).*/, "$1")}
                              </h3>
                              <h4>
                                {" "}
                                {elem.subTitle.replace(
                                  /^(.{20}[^\s]*).*/,
                                  "$1"
                                )}
                              </h4>
                              <h6>{elem.country}</h6>
                              <div className="overlay">
                                <div className="text"> {elem.title}</div>
                              </div>
                            </Card.Title>
                            <Card.Text className="cardText">
                              <h6>
                                {" "}
                                {elem.numberBough
                                  ? ` ${elem.numberBough} bought`
                                  : " "}
                              </h6>
                              <h4>
                                <span>From</span>
                                <br /> {elem.price
                                  ? ` $ ${elem.price} `
                                  : " "}{" "}
                              </h4>
                            </Card.Text>
                            {elem.button ? (
                              <Button
                                className="cardButton"
                                variant="outline-secondary"
                                id="button-addon2"
                              >
                                View Collection
                              </Button>
                            ) : null}
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  }
                })}
              </div>
            </MDBRow>
          </div>
          <div className="card">
            <MDBRow>
              <MDBCol md="3">
                <h2 style={{ textAlign: "left" }}>Escapes </h2>{" "}
              </MDBCol>
              <MDBCol md="3">
                {" "}
                <Button
                  className="CategoriesButton"
                  variant="outline-secondary"
                  id="button-addon2"
                >
                  View More
                </Button>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <div className="allCards">
                {data.map((elem, index) => {
                  if (elem.category === "Escapes") {
                    return (
                      <div key={index} id={elem.id} className="allCard">
                        <Card className="cards">
                          <Card.Img variant="top" src={elem.img} />
                          {data.newTOSite ? "New TO Site" : " "}
                          <Card.Body>
                            <Card.Title>
                              <h3>
                                {" "}
                                {elem.title.replace(/^(.{20}[^\s]*).*/, "$1")}
                              </h3>
                              <h4>
                                {" "}
                                {elem.subTitle.replace(
                                  /^(.{20}[^\s]*).*/,
                                  "$1"
                                )}
                              </h4>
                              <h6>{elem.country}</h6>
                              <div className="overlay">
                                <div className="text"> {elem.title}</div>
                              </div>
                            </Card.Title>
                            <Card.Text className="cardText">
                              <h6>
                                {" "}
                                {elem.numberBough
                                  ? ` ${elem.numberBough} bought`
                                  : " "}
                              </h6>
                              <h4>
                                <span>From</span>
                                <br /> {elem.price
                                  ? ` $ ${elem.price} `
                                  : " "}{" "}
                              </h4>
                            </Card.Text>
                            {elem.button ? (
                              <Button
                                className="cardButton"
                                variant="outline-secondary"
                                id="button-addon2"
                              >
                                View Collection
                              </Button>
                            ) : null}
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  }
                })}
              </div>
            </MDBRow>
          </div>
          <div className="card">
            <MDBRow>
              <MDBCol md="3">
                {" "}
                <h2 style={{ textAlign: "left" }}>
                  Activities, Events & Outdoors
                </h2>
              </MDBCol>
              <MDBCol md="3">
                {" "}
                <Button
                  className="CategoriesButton"
                  variant="outline-secondary"
                  id="button-addon2"
                >
                  View More
                </Button>{" "}
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <div className="allCards">
                {data.map((elem, index) => {
                  if (elem.category === "Activities, Events & Outdoors") {
                    return (
                      <div key={index} id={elem.id} className="allCard">
                        <Card className="cards">
                          <Card.Img variant="top" src={elem.img} />
                          {data.newTOSite ? "New TO Site" : " "}
                          <Card.Body>
                            <Card.Title>
                              <h3>
                                {" "}
                                {elem.title.replace(/^(.{20}[^\s]*).*/, "$1")}
                              </h3>
                              <h4>
                                {" "}
                                {elem.subTitle.replace(
                                  /^(.{20}[^\s]*).*/,
                                  "$1"
                                )}
                              </h4>
                              <h6>{elem.country}</h6>{" "}
                              <div className="overlay">
                                <div className="text"> {elem.title}</div>
                              </div>
                            </Card.Title>
                            <Card.Text className="cardText">
                              <h6>
                                {" "}
                                {elem.numberBough
                                  ? ` ${elem.numberBough} bought`
                                  : " "}
                              </h6>
                              <h4>
                                <span>From</span>
                                <br /> {elem.price
                                  ? ` $ ${elem.price} `
                                  : " "}{" "}
                              </h4>
                            </Card.Text>
                            {elem.button ? (
                              <Button
                                className="cardButton"
                                variant="outline-secondary"
                                id="button-addon2"
                              >
                                View Collection
                              </Button>
                            ) : null}
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  }
                })}
              </div>
            </MDBRow>
          </div>
          <div className="card">
            <MDBRow>
              <MDBCol md="3">
                {" "}
                <h2 style={{ textAlign: "left" }}>Store </h2>
              </MDBCol>
              <MDBCol md="3">
                {" "}
                <Button
                  className="CategoriesButton"
                  variant="outline-secondary"
                  id="button-addon2"
                >
                  View More
                </Button>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <div className="allCards">
                {data.map((elem, index) => {
                  if (elem.category === "Store") {
                    return (
                      <div key={index} id={elem.id} className="allCard">
                        <Card className="cards">
                          <Card.Img variant="top" src={elem.img} />
                          {data.newTOSite ? "New TO Site" : " "}
                          <Card.Body>
                            <Card.Title>
                              <h3>
                                {" "}
                                {elem.title.replace(/^(.{20}[^\s]*).*/, "$1")}
                              </h3>
                              <h4>
                                {" "}
                                {elem.subTitle.replace(
                                  /^(.{20}[^\s]*).*/,
                                  "$1"
                                )}
                              </h4>
                              <h6>{elem.country}</h6>{" "}
                              <div className="overlay">
                                <div className="text"> {elem.title}</div>
                              </div>
                            </Card.Title>
                            <Card.Text className="cardText">
                              <h6>
                                {" "}
                                {elem.numberBough
                                  ? ` ${elem.numberBough} bought`
                                  : " "}
                              </h6>
                              <h4>
                                <span>From</span>
                                <br /> {elem.price
                                  ? ` $ ${elem.price} `
                                  : " "}{" "}
                              </h4>
                            </Card.Text>
                            {elem.button ? (
                              <Button
                                className="cardButton"
                                variant="outline-secondary"
                                id="button-addon2"
                              >
                                View Collection
                              </Button>
                            ) : null}
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  }
                })}
              </div>
            </MDBRow>
          </div>
          <div className="card">
            <MDBRow>
              <MDBCol md="3">
                {" "}
                <h2 style={{ textAlign: "left" }}>
                  Restaurants, Bars, Cafes
                </h2>{" "}
              </MDBCol>
              <MDBCol md="3">
                {" "}
                <Button
                  className="CategoriesButton"
                  variant="outline-secondary"
                  id="button-addon2"
                >
                  View More
                </Button>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <div className="allCards">
                {data.map((elem, index) => {
                  if (elem.category === "Restaurants, Bars, Cafes") {
                    return (
                      <div key={index} id={elem.id} className="allCard">
                        <Card className="cards">
                          <Card.Img variant="top" src={elem.img} />
                          {data.newTOSite ? "New TO Site" : " "}
                          <Card.Body>
                            <Card.Title>
                              <h3>
                                {" "}
                                {elem.title.replace(/^(.{20}[^\s]*).*/, "$1")}
                              </h3>
                              <h4>
                                {" "}
                                {elem.subTitle.replace(
                                  /^(.{20}[^\s]*).*/,
                                  "$1"
                                )}
                              </h4>
                              <h6>{elem.country}</h6>{" "}
                              <div className="overlay">
                                <div className="text"> {elem.title}</div>
                              </div>
                            </Card.Title>
                            <Card.Text className="cardText">
                              <h6>
                                {" "}
                                {elem.numberBough
                                  ? ` ${elem.numberBough} bought`
                                  : " "}
                              </h6>
                              <h4>
                                <span>From</span>
                                <br /> {elem.price
                                  ? ` $ ${elem.price} `
                                  : " "}{" "}
                              </h4>
                            </Card.Text>
                            {elem.button ? (
                              <Button
                                className="cardButton"
                                variant="outline-secondary"
                                id="button-addon2"
                              >
                                View Collection
                              </Button>
                            ) : null}
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  }
                })}
              </div>
            </MDBRow>
          </div>
          <div className="card">
            <MDBRow>
              <MDBCol md="3">
                <h2 style={{ textAlign: "left" }}>Beauty, Massage & Spa</h2>
              </MDBCol>
              <MDBCol md="3">
                {" "}
                <Button
                  className="CategoriesButton"
                  variant="outline-secondary"
                  id="button-addon2"
                >
                  View More
                </Button>{" "}
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <div className="allCards">
                {data.map((elem, index) => {
                  if (elem.category === "Beauty, Massage & Spa") {
                    return (
                      <div key={index} id={elem.id} className="allCard">
                        <Card className="cards">
                          <Card.Img
                            className="imgCard"
                            variant="top"
                            src={elem.img}
                          />
                          {data.newTOSite ? "New TO Site" : " "}
                          <Card.Body>
                            <Card.Title>
                              <h3>
                                {" "}
                                {elem.title.replace(/^(.{20}[^\s]*).*/, "$1")}
                              </h3>
                              <h4>
                                {" "}
                                {elem.subTitle.replace(
                                  /^(.{20}[^\s]*).*/,
                                  "$1"
                                )}
                              </h4>
                              <h6>{elem.country}</h6>{" "}
                              <div className="overlay">
                                <div className="text"> {elem.title}</div>
                              </div>
                            </Card.Title>
                            <Card.Text className="cardText">
                              <h6>
                                {" "}
                                {elem.numberBough
                                  ? ` ${elem.numberBough} bought`
                                  : " "}
                              </h6>
                              <h4>
                                <span>From</span>
                                <br /> {elem.price
                                  ? ` $ ${elem.price} `
                                  : " "}{" "}
                              </h4>
                            </Card.Text>
                            {elem.button ? (
                              <Button
                                className="cardButton"
                                variant="outline-secondary"
                                id="button-addon2"
                              >
                                View Collection
                              </Button>
                            ) : null}
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  }
                })}
              </div>
            </MDBRow>
          </div>
          <div className="card">
            <MDBRow>
              <MDBCol md="3">
                {" "}
                <h2 style={{ textAlign: "left" }}>House & Garden</h2>
              </MDBCol>
              <MDBCol md="3">
                {" "}
                <Button
                  className="CategoriesButton"
                  variant="outline-secondary"
                  id="button-addon2"
                >
                  View More
                </Button>
              </MDBCol>{" "}
            </MDBRow>
            <MDBRow>
              <div className="allCards">
                {data.map((elem, index) => {
                  if (elem.category === "House & Garden") {
                    return (
                      <div key={index} id={elem.id} className="allCard">
                        <Card className="cards">
                          <Card.Img variant="top" src={elem.img} />
                          {data.newTOSite ? "New TO Site" : " "}
                          <Card.Body>
                            <Card.Title>
                              <h3>
                                {" "}
                                {elem.title.replace(/^(.{20}[^\s]*).*/, "$1")}
                              </h3>
                              <h4>
                                {" "}
                                {elem.subTitle.replace(
                                  /^(.{20}[^\s]*).*/,
                                  "$1"
                                )}
                              </h4>
                              <h6>{elem.country}</h6>{" "}
                              <div className="overlay">
                                <div className="text"> {elem.title}</div>
                              </div>
                            </Card.Title>
                            <Card.Text className="cardText">
                              <h6>
                                {" "}
                                {elem.numberBough
                                  ? ` ${elem.numberBough} bought`
                                  : " "}
                              </h6>
                              <h4>
                                <span>From</span>
                                <br /> {elem.price
                                  ? ` $ ${elem.price} `
                                  : " "}{" "}
                              </h4>
                            </Card.Text>
                            {elem.button ? (
                              <Button
                                className="cardButton"
                                variant="outline-secondary"
                                id="button-addon2"
                              >
                                View Collection
                              </Button>
                            ) : null}
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  }
                })}
              </div>
            </MDBRow>
          </div>
          <div className="card">
            <MDBRow>
              <MDBCol md="3">
                <h2 style={{ textAlign: "left" }}>Fitness & Sports</h2>
              </MDBCol>
              <MDBCol md="3">
                {" "}
                <Button
                  className="CategoriesButton"
                  variant="outline-secondary"
                  id="button-addon2"
                >
                  View More
                </Button>
              </MDBCol>{" "}
            </MDBRow>
            <MDBRow>
              <div className="allCards">
                {data.map((elem, index) => {
                  if (elem.category === "Fitness & Sports") {
                    return (
                      <div key={index} id={elem.id} className="allCard">
                        <Card className="cards">
                          <Card.Img variant="top" src={elem.img} />
                          {data.newTOSite ? "New TO Site" : " "}
                          <Card.Body>
                            <Card.Title>
                              <h3>
                                {" "}
                                {elem.title.replace(/^(.{20}[^\s]*).*/, "$1")}
                              </h3>
                              <h4>
                                {" "}
                                {elem.subTitle.replace(
                                  /^(.{20}[^\s]*).*/,
                                  "$1"
                                )}
                              </h4>
                              <h6>{elem.country}</h6>{" "}
                              <div className="overlay">
                                <div className="text"> {elem.title}</div>
                              </div>
                            </Card.Title>
                            <Card.Text className="cardText">
                              <h6>
                                {" "}
                                {elem.numberBough
                                  ? ` ${elem.numberBough} bought`
                                  : " "}
                              </h6>
                              <h4>
                                <span>From</span>
                                <br /> {elem.price
                                  ? ` $ ${elem.price} `
                                  : " "}{" "}
                              </h4>
                            </Card.Text>
                            {elem.button ? (
                              <Button
                                className="cardButton"
                                variant="outline-secondary"
                                id="button-addon2"
                              >
                                View Collection
                              </Button>
                            ) : null}
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  }
                })}
              </div>
            </MDBRow>
          </div>
          <div className="card">
            <MDBRow>
              <MDBCol md="3">
                {" "}
                <h2 style={{ textAlign: "left" }}>Automotive</h2>
              </MDBCol>
              <MDBCol md="3">
                {" "}
                <Button
                  className="CategoriesButton"
                  variant="outline-secondary"
                  id="button-addon2"
                >
                  View More
                </Button>
              </MDBCol>{" "}
            </MDBRow>
            <MDBRow>
              <div className="allCards">
                {data.map((elem, index) => {
                  if (elem.category === "Automotive") {
                    return (
                      <div key={index} id={elem.id} className="allCard">
                        <Card className="cards">
                          <Card.Img variant="top" src={elem.img} />
                          {data.newTOSite ? "New TO Site" : " "}
                          <Card.Body>
                            <Card.Title>
                              <h3>
                                {" "}
                                {elem.title.replace(/^(.{20}[^\s]*).*/, "$1")}
                              </h3>
                              <h4>
                                {" "}
                                {elem.subTitle.replace(
                                  /^(.{20}[^\s]*).*/,
                                  "$1"
                                )}
                              </h4>
                              <h6>{elem.country}</h6>{" "}
                              <div className="overlay">
                                <div className="text"> {elem.title}</div>
                              </div>
                            </Card.Title>
                            <Card.Text className="cardText">
                              <h6>
                                {" "}
                                {elem.numberBough
                                  ? ` ${elem.numberBough} bought`
                                  : " "}
                              </h6>
                              <h4>
                                <span>From</span>
                                <br /> {elem.price
                                  ? ` $ ${elem.price} `
                                  : " "}{" "}
                              </h4>
                            </Card.Text>
                            {elem.button ? (
                              <Button
                                className="cardButton"
                                variant="outline-secondary"
                                id="button-addon2"
                              >
                                View Collection
                              </Button>
                            ) : null}
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  }
                })}
              </div>
            </MDBRow>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Category;
