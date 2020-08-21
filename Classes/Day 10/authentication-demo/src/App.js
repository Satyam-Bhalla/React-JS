import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {isLoading} = useAuth0();
  if(isLoading) return <div>Loading...</div>
  
  return (
    <React.Fragment>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </React.Fragment>
  );
}

export default App;
