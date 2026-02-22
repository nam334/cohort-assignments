import { useEffect, useRef, useState } from "react";
import { searchProducts } from "../api/searchApi";

export const useSearch = (query) => {
  const [fetchResults, setfetchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const cacheRef = useRef({});

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (!query) {
          setfetchResults([]);
          return;
        }
        setLoading(true);
        const cacheKey = `query-${query}`;

        //check cache
        if (cacheRef.current[cacheKey]) {
          setLoading(false);
          console.log("fetching from cache");
          setfetchResults(cacheRef.current[cacheKey]);

          return;
        }

        //fetch from api if not in cache
        const result = await searchProducts(query);

        //store in cache
        cacheRef.current[cacheKey] = result?.products;

        //append products
        setfetchResults(result?.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [query]);
  return { fetchResults, loading, error, setfetchResults };
};
