
import React from "react";
import "./index.css";
import QuoteGenerator from "./Component/QuoteGenerator";
import Quote1 from "./assets/quote1.png";
import Quote2 from "./assets/quote2.png";
import Quote3 from "./assets/quote3.png";
import Quote4 from "./assets/quote4.png";
import Quote5 from "./assets/quote5.png";
import Quote6 from "./assets/quote6.png";


const quotes = [
  {
    title: "First Quote.",
    image: Quote1,
  },
  {
    title: "Second Quote",
    image: Quote2,
  },
  {
    title: "Third Quote",
    image: Quote3,
  },

  {
    title: "Fourth Quote",
    image: Quote4,
  },
  {
    title: "Fifth Quote",
    image: Quote5,
  },
  {
    title: "Sixth Quote",
    image: Quote6,
  },
];

function App() {
  return (
    <>
      <div className="head">
        <h1>Quote Generator</h1>
      </div>
      <QuoteGenerator quotes={quotes} />
    </>
  );
}

export default App;
