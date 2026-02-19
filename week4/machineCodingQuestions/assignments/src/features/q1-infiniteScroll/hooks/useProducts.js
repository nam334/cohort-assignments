import { useEffect, useState } from "react";
import { fetchData } from "../api/productsApi";
import { useRef } from "react";

const LIMIT = 20;
const useProducts = (page) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const cacheRef = useRef({});
  useEffect(() => {
    const loadProductData = async () => {
      try {
        setLoading(true);
        //create cache key
        const cacheKey = `page-${page}`;

        //check cache first
        if (cacheRef.current[cacheKey]) {
          console.log("fetching from cache");
          setProducts((prev) => [...prev, ...cacheRef.current[cacheKey]]);
          setLoading(false);
          return;
        }

        // 🔹 Fetch from API if not cached
        const productData = await fetchData(page, LIMIT);

        //store in cache
        cacheRef.current[cacheKey] = productData.products;

        //append products
        setProducts((prev) => [...prev, ...productData.products]);

        // stop when fewer than LIMIT returned
        if (productData.products.length < LIMIT) {
          setHasMore(false);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProductData();
  }, [page]);

  return { loading, error, products, hasMore };
};

export default useProducts;
