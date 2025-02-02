import React from "react";

function NewsFeed({ title, author, excerpt, words, handleReadmore, readmore }) {
  return (
    <div className="newsfeed">
      <h1>{title}</h1>
      <h3>{author}</h3>
      <p>{excerpt}</p>

      <button onClick={handleReadmore} className="more">
        {readmore ? "Read Less" : "Read More"}
      </button>
      {readmore && <p>{words}</p>}
    </div>
  );
}

export default NewsFeed;
