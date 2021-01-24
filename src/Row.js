import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(fetchUrl);

      setmovies(data.results);
    };

    fetchData();
  }, [fetchUrl]);
 

  const renderedMovies = movies.map((movie) => {
    return (
      <img
        key={movie.id}
        className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
        src={`${baseUrl}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.name}
      />
    );
  });
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">{renderedMovies}</div>
    </div>
  );
};

export default Row;
