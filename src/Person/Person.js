import React from "react";
import "./Person.css";

const Person = props => {
  const style = {
    "@media (min-width:500px)": {
      width: "450px"
    }
  };

  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old! {props.children}
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
