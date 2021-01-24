import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
import './Banner.css'

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(request.fetchNetflixOriginals);

      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    };

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className= 'banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>

          <button className="banner__button">My List</button>
          <h1 className="banner__description">
              {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>
      <div className="banner__fadeButton"></div>
    </header>
  );
};

export default Banner;
