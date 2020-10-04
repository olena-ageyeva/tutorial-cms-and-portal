import React from "react";

import Application from "./components/Application";
import UserProvider from "./components/providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;

// import React from "react";
// import { Switch, Route, Link } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import AddTutorial from "./components/tutorials/AddTutorial";
// import TutorialsList from "./components/tutorials/TutorialsList";
// import AddUser from "./components/user/add-user";
// import useAuth from "./components/user/use-auth";

// function App() {
//   const user = useAuth();

//   <div>
//     <Navbar bg="dark" variant="dark">
//       <Navbar.Brand href="/tutorials">EBSCO-Onboarding</Navbar.Brand>
//       <Nav className="mr-auto">
//         <Nav.Link href="/tutorials">
//           <Link to={"/tutorials"} className="nav-link">
//             Tutorials
//           </Link>
//         </Nav.Link>
//         <Nav.Link href="/add">
//           <Link to={"/add"} className="nav-link">
//             Add
//           </Link>
//         </Nav.Link>
//       </Nav>
//       <Navbar.Collapse className="justify-content-end">
//         <Navbar.Text>
//           Signed in as: <a href="/user">User</a>
//         </Navbar.Text>
//       </Navbar.Collapse>
//     </Navbar>

//     <div className="container mt-3" key={user}>
//       <h2>EBSCO Onboarding Tutorial</h2>

//       <Switch>
//         <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
//         <Route exact path="/add" component={AddTutorial} />
//         <Route exact path="/user" component={AddUser} />
//       </Switch>
//     </div>
//   </div>
// }

// export default App;
