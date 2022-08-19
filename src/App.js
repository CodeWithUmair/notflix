import React, { useState } from "react";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    s: "",
    results: "",
    selected: "",
  });

  const url = "https://www.omdbapi.com/?i=tt3896198&apikey=32660672";
  const search = (e) => {
    if (e.key === "Enter") {
      axios(url + "&s" + state.s).then(({ data }) => {
        let results = data.Search;
        setState((prevState) => {
          return { ...prevState, results };
        });
      });
    }
  };
  const handleInput = (e) => {
    let s = e.target.value;
    setState((preState) => {
      return { ...preState, s };
    });
  };

  return (
    <>
      <header>
        <h1>Notflix</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
      </main>
    </>
  );
}

export default App;
