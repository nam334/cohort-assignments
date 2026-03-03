import { useState } from "react";
import "./LikeButton.css";
import { useLikeButton } from "../hooks/useLikeButton";

const LikeButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { isLiked, isLoading, clickHandler, error } = useLikeButton();
  return (
    <>
      <button
        className={`like-btn ${isHovered ? "hover" : isLoading ? "loading" : isLiked ? "liked" : null}`}
        onClick={(e) => clickHandler(e)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isLoading ? (
          <svg
            className="spinner"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="40"
              strokeDashoffset="10"
            />
          </svg>
        ) : (
          <span className="heart-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="38"
              height="38"
            >
              <path d="M20.8 4.6c-1.5-1.6-4-1.6-5.5 0L12 7.9l-3.3-3.3c-1.5-1.6-4-1.6-5.5 0-1.6 1.6-1.6 4.1 0 5.7l8.8 9 8.8-9c1.6-1.6 1.6-4.1 0-5.7z" />
            </svg>
          </span>
        )}
        <span> Like</span>
      </button>
      {error && <div className="error">{error}</div>}
    </>
  );
};

export default LikeButton;
