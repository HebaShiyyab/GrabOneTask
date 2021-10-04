import React from "react";
import "./Category.css";
import Buttons from "../Buttons";


function Category(props) {
  const { dataCard ,category} = props;

  return (
    <main className="class-category">
      {category.map((elem) => {
        return <Buttons category={elem} dataCard={dataCard} />;
      })}
    </main>
  );
}

export default Category;
