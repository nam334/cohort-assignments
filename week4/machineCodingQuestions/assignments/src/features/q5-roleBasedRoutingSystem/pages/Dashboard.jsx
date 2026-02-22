import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h3>Dashboard</h3>
      <Link to="/admin">Go to Admin Page as User</Link>
    </>
  );
};

export default Dashboard;
