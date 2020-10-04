import { useState, useEffect } from "react";
import firebase from "../../firebase";

const useAuth = () => {
  const [user, setUser] = useState(null);

  var currentUser = firebase.auth().currentUser;

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
      console.log("signed in", currentUser);
    }
  }, [currentUser]);

  return user;
};

export default useAuth;
