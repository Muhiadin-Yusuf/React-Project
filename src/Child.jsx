import React from "react";

const Child = (props) => {
  return (
    <div>
      <p>age: {props.age}</p>
      <p>phone {props.phone}</p>
      <p>fullName {props.fullName}</p>
    </div>
  );
};

export default Child;
