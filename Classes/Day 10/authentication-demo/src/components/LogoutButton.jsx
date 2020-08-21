import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <React.Fragment>
        <button onClick={() => logout()}>Logout</button>{" "}
      </React.Fragment>
    )
  );
};

export default LogoutButton;
