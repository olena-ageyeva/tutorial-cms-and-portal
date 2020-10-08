import React, { useContext } from "react";

import SignIn from "./user/SignIn";
import SignUp from "./user/SignUp";

import ProfilePage from "./user/ProfilePage";
import { UserContext } from "./providers/UserProvider";
import PasswordReset from "./user/PasswordReset";

import { Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTutorial from "./tutorials/AddTutorial";
import EditTutorial from "./tutorials/EditTutorial";
import TutorialsList from "./tutorials/TutorialsList";
import { auth } from "../firebase";

function Application() {
  const user = useContext(UserContext);

  return user ? (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/tutorials">EBSCO-Onboarding</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/tutorials">Tutorials</Nav.Link>
          <Nav.Link href="/add">Add</Nav.Link>
          <Nav.Link href="/edit">Edit</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="/user">{user.displayName}</a>
            {"   "}
            <button
              onClick={() => {
                auth.signOut();
              }}
            >
              <Link to="/">Sign out</Link>
            </button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <div>
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route exact path="/edit" component={EditTutorial} />
          <Route exact path="/user" component={ProfilePage} />
        </Switch>
      </div>
    </div>
  ) : (
    <Switch>
      <Route exact path={"/"} component={SignIn} />
      <Route exact path="/passwordReset" component={PasswordReset} />
      <Route exact path="/signUp" component={SignUp} />
    </Switch>
  );
}

export default Application;
