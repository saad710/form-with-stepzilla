import React from 'react';
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    useLocation
  } from "react-router-dom";
  import { StateMachineProvider, createStore } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";

import "./Style.css";
import Step1 from './Step1';

  createStore({
    yourDetails: {
      firstName: "",
      lastName: "",
      age: "",
      yearsOfExp: ""
    }
  });

const Form_main = () => {
    const location = useLocation();
    return (
        <>
        <nav className="container">
        <ul className="steps">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Step 1</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Step1} />
      </>
    );
};

export default Form_main;