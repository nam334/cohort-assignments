import React, { useRef, useState } from "react";
import { useSearch } from "../hooks/useSearch";
import "./Autocomplete.css";

const Autocomplete = () => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const { fetchResults, loading, error, setfetchResults } = useSearch(text);

  //console.log(fetchResults);

  const keyDownHandler = (e) => {
    if (e.key === "Escape") {
      setfetchResults([]);
    }
    if (e.key === "ArrowDown") {
      if (currentIndex > fetchResults?.length) setCurrentIndex(-1);
      setCurrentIndex((currentIndex) => currentIndex + 1);
    }
    if (e.key === "ArrowUp") {
      if (currentIndex < -1) setCurrentIndex(-1);
      setCurrentIndex((currentIndex) => currentIndex - 1);
    }
    if (e.key === "Enter") {
      setText(fetchResults[currentIndex]?.title);
      setfetchResults([]);
    }
  };
  const clickHandler = (fetchResult, i) => {
    console.log("click", fetchResult, i);
    setText(fetchResults[i]?.title);
    setfetchResults([]);
  };

  const blurHandler = () => {
    // setText("");
    setfetchResults([]);
  };
  return loading ? (
    "Loading"
  ) : (
    <>
      <div className="autocomplete-container">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => keyDownHandler(e)}
          onBlur={blurHandler}
        />

        <div className="suggestions-container">
          {text?.length > 0 && fetchResults?.length > 0
            ? fetchResults?.map((fetchResult, index) => {
                return (
                  <div
                    className="suggestion-item"
                    onMouseDown={() => clickHandler(fetchResult, index)}
                    style={{
                      backgroundColor: index === currentIndex ? "#ccc" : null,
                    }}
                  >
                    {fetchResult?.title}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default Autocomplete;
