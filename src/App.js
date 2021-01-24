import React from "react";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
import "./App.css";

const App = () => {
  //TODO NAV

  //TODO BANNER

  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTrending} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documemaries" fetchUrl={request.fetchDocumentariesMovies} />
    </div>
  );
};

export default App;
