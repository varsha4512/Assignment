import React from "react";
export const Card = (props) => {
  const { name, price, itemId } = props.item;
  return (
    <>
      <div className="main-container">
        <h2 className="head"> Card </h2>
        <div className="container">
          <p className="name">{name}</p>
          <p className="price">Price: Rs.{price} </p>
          <p className="item"> Item ID: {itemId} </p>
        </div>
      </div>
    </>
  );
};
