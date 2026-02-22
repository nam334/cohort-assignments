import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          login("user");
          navigate("/dashboard");
        }}
      >
        Login as User
      </button>
      <button
        onClick={() => {
          login("admin");
          navigate("/dashboard");
        }}
      >
        Login as Admin
      </button>
    </>
  );
};

export default Login;
