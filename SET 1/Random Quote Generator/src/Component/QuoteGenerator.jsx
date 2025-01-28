
import React, { useState } from "react";
import "../index.css";

function QuoteGenerator({ quotes }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < quotes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className="quoteBox">
        <div >
          <h1 className="title">{quotes[currentIndex].title}</h1>

          <img src={quotes[currentIndex].image} alt="image" className="image" />
        </div>

        <div className="">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="button"
          >
            Prev
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === quotes.length - 1}
            className="button"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
export default QuoteGenerator;
