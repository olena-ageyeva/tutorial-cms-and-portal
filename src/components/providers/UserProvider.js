import React, { useState, useEffect, createContext, useCallback } from "react";
import { auth, generateUserDocument } from "../../firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      //console.log("changes", userAuth);
      const currentUser = await generateUserDocument(userAuth);
      setUser(currentUser);
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
