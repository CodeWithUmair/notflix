import React from "react";
import Result from "./Result";

const Results = ({ results }) => (
  <>
    <section className="results">
      {results.map((result) => {
        return (
          <>
            <Result result={result} />;
          </>
        );
      })}
    </section>
  </>
);

export default Results;
