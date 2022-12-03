import React from "react";
import { useState, useEffect } from "react";
import FirstLoader from "../components/startingLoader/firstLoader.component";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const UserContext = React.createContext({
  preLoading: false,
  currentUser: null,
  setCurrentUser: () => null, // empty function
  setPreLoader: () => false, // empty function
});
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [preLoading, setPreLoader] = useState(true);
  // SignOutUser();
  useEffect(() => {
    setPreLoader(false);
    onAuthStateChangedListener((user) => {
      if (user) {
        setPreLoader(false);
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    // return unsub;
  }, []);
  const value = { currentUser, setCurrentUser, preLoading, setPreLoader };
  return (
    <UserContext.Provider value={value}>
      {value.preLoading ? <FirstLoader /> : children}
    </UserContext.Provider>
  );
};