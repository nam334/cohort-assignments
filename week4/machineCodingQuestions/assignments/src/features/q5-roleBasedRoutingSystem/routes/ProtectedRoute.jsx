import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();
  if (loading) return <>Loading..</>;
  if (!user) return <Navigate to="/login" />;
  if (allowedRoles) {
    if (!allowedRoles.includes(user.role))
      return <Navigate to="/unauthorized" />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
