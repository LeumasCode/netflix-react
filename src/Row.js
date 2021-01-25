import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(fetchUrl);

      setmovies(data.results);
      return data;
    };

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      origin: "http://localhost:3000",
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  const renderedMovies = movies.map((movie) => {
    console.log(trailerUrl);
    return (
      <img
        key={movie.id}
        onClick={() => handleClick(movie)}
        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
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
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
