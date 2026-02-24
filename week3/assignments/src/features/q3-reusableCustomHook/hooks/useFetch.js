import { useEffect } from "react";
import { useState } from "react";
import { fetchApi } from "../api/fetchapi";
import { cacheMemory } from "./cacheStorage";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fetchUsers, setFetchUsers] = useState([]);
  let cacheKey = url;
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        //check cache
        if (cacheMemory.has(cacheKey)) {
          let value = cacheMemory.get(cacheKey);
          const isExpired = Date.now() - value.timestamp > 120000;
          if (!isExpired) {
            //cache is not expired
            console.log("Fetching from cache");
            if (value.promise) {
              let data = await value.promise;
              setFetchUsers(data);
            }
            if (value.data) {
              setFetchUsers(value.data);
            }

            setLoading(false);
            return;
          }
          cacheMemory.delete(cacheKey);
        }
        //if not found, make api call
        let promise = fetchApi(url);
        //store data in cache after successfull response received
        cacheMemory.set(cacheKey, { promise });
        let results = await promise;
        let timestamp = Date.now();
        cacheMemory.set(cacheKey, { data: results, timestamp: timestamp });
        // const results = await fetchApi();
        setFetchUsers(results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [url]);

  return { loading, error, fetchUsers };
};
