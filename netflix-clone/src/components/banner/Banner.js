import React, { useState, useEffect } from 'react';
import '../banner/Banner.css';
import axios from '../utils/Axios';
import requests from '../utils/requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className='banner-container' 
        style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        }}>
     
      <div className='banner-content'>
        <div className='banner-title'>
          {movie?.title || movie?.name || movie?.original_name}
        </div>
        <div className='banner-buttons'>
          <button className='banner-button play-button'>Play</button>
          <button className='banner-button'>My List</button>
        </div>
        <div className='banner-description'>
          {truncate(movie?.overview, 150)}
        </div>
      </div>
      <div className='banner-fadebottom'> </div>
    </div>
  );
}

export default Banner;