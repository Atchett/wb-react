import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);
  // runs once
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // setTimeout(() => {
    //   alert("some alert");
    // }, 1000);
    return () => {
      console.log("[Cockpit.js] useEffect - cleanup");
    };
  }, []);

  // runs on every cycle
  useEffect(() => {
    console.log("[Cockpit.js] useEffect 2");
    return () => {
      console.log("[Cockpit.js] useEffect 2 - cleanup");
    };
  });

  useEffect(() => {
    toggleButtonRef.current.click();
  }, []);

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPeople) {
    btnClass = classes.Red;
  }

  if (props.peopleLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.peopleLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>Some text in here</p>
      <button
        className={btnClass}
        onClick={props.clicked}
        ref={toggleButtonRef}
      >
        Toggle people
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
