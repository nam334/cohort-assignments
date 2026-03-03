import { useEffect, useState } from "react";
import { mockApi } from "../api/apiButton";

export const useLikeButton = () => {
  const [isLiked, setLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const clickHandler = () => {
    //setLiked(true);
    //setIsHovered(false);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) return;
    //if (isLiked) setLiked((isLiked) => !isLiked);
    const fetchData = async () => {
      try {
        const data = await mockApi();
        setLiked((isLiked) => !isLiked);
        setError("");
      } catch (err) {
        setError(err.message);
        // setLiked(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [isLoading]);
  return {
    isLiked,
    error,
    isLoading,
    clickHandler,
  };
};
