import React, { useContext, useEffect, useState } from "react";
import { Router } from "@reach/router";
import SignIn from "./user/SignIn";
import SignUp from "./user/SignUp";

import ProfilePage from "./user/ProfilePage";
import { UserContext } from "./providers/UserProvider";
import PasswordReset from "./user/PasswordReset";

import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTutorial from "./tutorials/AddTutorial";
import TutorialsList from "./tutorials/TutorialsList";
import { auth, generateUserDocument } from "../firebase";
import AddUser from "./user/add-user";
//import useAuth from "./components/user/use-auth";

function Application() {
  // const [user, setUser] = useState(null);

  const user = useContext(UserContext);

  //   user &&
  //     auth.currentUser.updateProfile({ displayName: "hello", photoURL: "test" });

  console.log("user application", user);

  return user ? (
    // <ProfilePage />
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/tutorials">EBSCO-Onboarding</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/tutorials">Tutorials</Nav.Link>
          <Nav.Link href="/add">Add</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="/user">{user.email}</a>
            {"   "}
            <Link to="/">
              <button
                onClick={() => {
                  auth.signOut();
                }}
              >
                Sign out
              </button>
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <div className="container mt-3">
        {/* <Router>
          <TutorialsList path="/" />
          <TutorialsList path="/tutorials" />
          <AddTutorial path="/add" />
          <ProfilePage path="/user" />
          <TutorialsList default />
        </Router> */}
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
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
