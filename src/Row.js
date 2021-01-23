import React, { useState, useEffect } from "react";
import axios from "./axios";

const Row = ({ title, fetchUrl }) => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(fetchUrl);

      setmovies(data.results);
    };

    fetchData();
  }, [fetchUrl]);

  return <div></div>;
};

export default Row;
