import React from "react";
import { useFetch } from "./hooks/useFetch";

const UsersA = () => {
  const fetchUsers = useFetch();
  console.log(fetchUsers);
  return <>{}</>;
};

export default UsersA;
