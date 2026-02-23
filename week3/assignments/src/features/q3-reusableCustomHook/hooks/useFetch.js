import { useEffect } from "react";
import { useState } from "react";
import { fetchApi } from "../api/fetchapi";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fetchUsers, setFetchUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const results = await fetchApi();
        setFetchUsers(results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return { loading, error, fetchUsers };
};
