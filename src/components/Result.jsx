import React from "react";

const Result = ({ result }) => {
  return (
    <>
      <section className="result">
        <img src={result.Poster} alt="hello" />
        <h3>{result.Title}</h3>
      </section>
    </>
  );
};

export default Result;
