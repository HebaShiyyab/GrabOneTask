import React from "react";
import Button from "react-bootstrap/Button";
import { BiChevronRight } from "react-icons/bi";
import { AllData } from "../Category/db";
import MinyCard from "../MinyCard";
import './Buttons.css';

export default function Buttons(props) {
  const {  category } = props;
  return (
    <section className="class-section">
      <div className="buttons">
        <h3>{category}</h3>
        <Button id="button-addon2">
          View More <BiChevronRight></BiChevronRight>
        </Button>
      </div>
      <div className="category-dataCard">
        {AllData
          .filter((elem) => {
            return elem.Category === category;
          })
          .map((elem) => {
            return <MinyCard item={elem}  />;
          })}
      </div>
    </section>
  );
}
