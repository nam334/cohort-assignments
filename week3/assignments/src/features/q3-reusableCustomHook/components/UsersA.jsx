import React from "react";
import { useFetch } from "../hooks/useFetch";
import { API_ENDPOINTS, BASE_URL } from "../api/apiEndpoints";

const UsersA = () => {
  const { loading, error, fetchUsers } = useFetch(
    `${BASE_URL}/${API_ENDPOINTS?.USERS}`,
  );
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error...</h3>;
  return (
    <>
      <h3>Users A</h3>
      {fetchUsers?.length > 0
        ? fetchUsers?.map((fetchUser, index) => (
            <div key={index}>{fetchUser?.username}</div>
          ))
        : null}
    </>
  );
};

export default UsersA;
