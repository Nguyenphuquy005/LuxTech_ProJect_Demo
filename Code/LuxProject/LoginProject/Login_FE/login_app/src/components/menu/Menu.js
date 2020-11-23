
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import ShowRouter from "./../../routers/showRouters"
const menus = [
  {
    name: 'Trang chu',
    to: '/',
    exact: true
  },
  {
    name: 'list',
    to: '/axios',
    exact: true
  }

]

const MenuLink = ({ label, to, activeOnlyWhenExxac }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExxac}
      children={({ match }) => {
        var active = match ? 'active' : '';
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        )
      }

      }
    />
  )
}

class Home extends Component {
  render() {
    return (

      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            CALL API
            </a>

          <div className="navbar-nav mr-auto">
            <ul className="navbar-nav mr-auto">

              {this.showMenus(menus)}

            </ul>

          </div>

        </nav>
      </div>

    );
  }
  showMenus = (menus) => {

    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExxac={menu.exact}
          />
        )
      }
      )
    }
    return result;
  }
}

export default Home;
