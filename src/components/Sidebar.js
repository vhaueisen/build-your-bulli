import React, { Component } from "react";
import {
  NavLink,
  Route,
  Switch,
  withRouter,
  useParams,
  Redirect,
} from "react-router-dom";
import CustomizationPanel from "./CustomizationPanel";
import { ToggleCamera } from "./Engine";

function Menu({ machine }) {
  let { id } = useParams();
  return (
    <div className="no-flow p-4">
      {id === "interior" && (
        <CustomizationPanel machine={machine} index={"interior"} />
      )}
      {id === "exterior" && (
        <CustomizationPanel machine={machine} index={"exterior"} />
      )}
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
                onClick={() => ToggleCamera(0)}
              >
                EXTERIOR
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to={`${url}/interior`}
                onClick={() => ToggleCamera(1)}
              >
                INTERIOR
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path={`${path}/:id`}>
            <Menu machine={this.props.machine} />
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
