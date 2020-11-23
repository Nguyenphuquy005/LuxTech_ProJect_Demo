import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
// import './App.css';

import Menu from "./components/menu/Menu"
import ShowRouter from "./routers/showRouters"
class TestApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <div>

            <Menu />
          </div>


          <div>
            <ShowRouter />
          </div>

        </div>
      </BrowserRouter>
    );
  }

}

export default TestApp;