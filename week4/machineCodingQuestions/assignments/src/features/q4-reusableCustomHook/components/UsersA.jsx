import React from "react";
import { useFetch } from "../hooks/useFetch";

const UsersA = () => {
  const { loading, error, fetchResults } = useFetch();
  console.log(fetchResults);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>error...</h3>;
  return (
    <>
      <h1>User A</h1>
      {fetchResults?.length > 0 &&
        fetchResults?.map((fetchResult, index) => (
          <p>{fetchResult?.username}</p>
        ))}
    </>
  );
};

export default UsersA;
