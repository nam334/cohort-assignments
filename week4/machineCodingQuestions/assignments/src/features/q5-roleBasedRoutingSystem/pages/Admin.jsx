import React from "react";
import { useAuth } from "../context/AuthContext";

const Admin = () => {
  const { user } = useAuth();
  return <div>Admin - {user}</div>;
};

export default Admin;
