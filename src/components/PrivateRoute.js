import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Component }) => {
  const isAuthenticated = true;
  //const isAuthenticated = false;
  //if false then the page will be navigated to the books page

  return isAuthenticated ? Component : <Navigate to="/"></Navigate>;
};
