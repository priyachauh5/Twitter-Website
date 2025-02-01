import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import { auth } from "./firebase"; // Ensure that you have correctly initialized Firebase
  import { createContext, useContext, useEffect, useState } from "react";
  
  // Rename to start with uppercase letter
  const UserAuthContext = createContext();
  
  // Provider component to wrap the app
  export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState(null); // Correct initial value
  
    function login(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
    }
  
    function signin(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
    }
  
    function logout() {
      return signOut(auth);
    }
  
    function googlesignin() {
      const googleAuthProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleAuthProvider); // Correct API call
    }
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("Auth", currentUser);
        setUser(currentUser); // Update the state with the current user
      });
      return () => unsubscribe(); // Clean up on component unmount
    }, []);
  
    return (
      <UserAuthContext.Provider value={{ user, login, signin, logout, googlesignin }}>
        {children}
      </UserAuthContext.Provider>
    );
  }
  
  // Custom hook to use the user auth context
  export function useUserauth() {
    return useContext(UserAuthContext); // Correct hook to consume context
  }
  