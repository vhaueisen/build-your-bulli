import React, { Component } from "react";
import {
  NavLink,
  Route,
  Switch,
  withRouter,
  useParams,
  Redirect,
} from "react-router-dom";
import Interior from "./Interior";
import Exterior from "./Exterior";

function Menu() {
  let { id } = useParams();
  return (
    <div className="no-flow p-4">
      {id === "interior" && <Interior />}
      {id === "exterior" && <Exterior />}
    </div>
  );
}

class Sidebar extends Component {
  render() {
    const { path, url } = this.props.match;

    return (
      <div className="col-lg-3 p-0 mx-height">
        <div className="c-select p-5">
          <ul className="nav nav-pills nav-fill mt-2">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to={`${url}/exterior`}
              >
                EXTERIOR
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to={`${url}/interior`}
              >
                INTERIOR
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path={`${path}/:id`}>
            <Menu />
          </Route>
          <Route path={path}>
            <Redirect to={`${url}/exterior`} push />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Sidebar);
