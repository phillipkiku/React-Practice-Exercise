import { useState } from "react";

import NewsFeed from "./Component/NewsFeed";
let newsFeed = [
  {
    title: "WORKING WITH REACT",
    author: "James",
    excerpt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    words: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde culpa
        laboriosam numquam pariatur expedita maiores excepturi suscipit tenetur
        illo cum! Provident assumenda veritatis deserunt fugit. Molestias illum
        facilis ipsa impedit?
      </p>
    ),
  },
  {
    title: "LEARNING TO CODE",
    author: "Emma",
    excerpt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    words: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde culpa
        laboriosam numquam pariatur expedita maiores excepturi suscipit tenetur
        illo cum! Provident assumenda veritatis deserunt fugit. Molestias illum
        facilis ipsa impedit?
      </p>
    ),
  },
  {
    title: " REACT LOGIN",
    author: "Stella",
    excerpt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    words: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde culpa
        laboriosam numquam pariatur expedita maiores excepturi suscipit tenetur
        illo cum! Provident assumenda veritatis deserunt fugit. Molestias illum
        facilis ipsa impedit?
      </p>
    ),
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [readmore, setReadMore] = useState(false);
  const handleReadmore = () => {
    setReadMore(!readmore);
  };

  const handleNext = () => {
    if (currentIndex < newsFeed.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className="news">
        <h1>NEWS FEED </h1>

        <NewsFeed
          title={newsFeed[currentIndex].title}
          author={newsFeed[currentIndex].author}
          excerpt={newsFeed[currentIndex].excerpt}
          words={newsFeed[currentIndex].words}
          handleReadmore={handleReadmore}
          readmore={readmore}
        />
      </div>
      <div className="buttons">
        <button onClick={handleNext}>NEXT</button>
        <button onClick={handlePrev}>PREV</button>
      </div>
    </>
  );
}
export default App;
