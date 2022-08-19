import React from "react";
import ResultShow from "./Result";

const Results = ({ results }) => {
  return (
    <>
      <section className="results">
        {results.map((result) => {
          <ResultShow result={result} />;
        })}
      </section>
    </>
  );
};

export default Results;
