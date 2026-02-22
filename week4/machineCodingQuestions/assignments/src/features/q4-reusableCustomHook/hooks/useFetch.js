import { useEffect, useState } from "react";
import { fetchUsers } from "../api/fetchApi";
import { sharedData } from "./cacheStore";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fetchResults, setFetchResults] = useState([]);
  let cacheKey = `users`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        //check cache
        if (sharedData.has(cacheKey)) {
          let value = sharedData.get(cacheKey);
          if (value.promise) {
            console.log("fetch from cache with data");
            setFetchResults(await value.promise);
          } else {
            console.log("fetch from cache awaiting promise");
            setFetchResults(value.data);
          }
          setLoading(false);
          return;
        }
        //else fetch results (if cache is empty)
        const promise = fetchUsers();
        sharedData.set(cacheKey, { promise });
        const results = await promise;
        sharedData.set(cacheKey, { data: results });
        setFetchResults(results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const invalidateData = () => {
    sharedData.delete(cacheKey);
  };
  const refreshData = async () => {
    sharedData.delete(cacheKey);
    await fetchUsers();
  };

  return { loading, error, fetchResults, refreshData, invalidateData };
};
