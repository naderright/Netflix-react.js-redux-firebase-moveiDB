import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../axios/axios.jsx';
// import axios from 'axios'
import Requests from '../axios/Requests.jsx';

function Banner() {

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(Requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
      );
      return request;
    }
    fetchData()
  }, []);

  const trancate = (string, n) => {
    if (string && string.length > n) {
     return string.substr(0, n - 1) + '...'
    }else{
      return string
    }
    //  console.log(string)
    // return string.length > n ? string.substr(0, n - 1) + '...' : string;
  }
  return (

    <div>
      {/* {console.log(movie)} */}
      <header className='banner' style={
        { backgroundImage: `url(${movie?Requests.img+movie.backdrop_path:''})` }
      }>
        <div className="banner_content">
          <h1 className='banner_title'>{movie?movie.title || movie.name || movie.original_name:''}</h1>
          <div className="banner_buttons">
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
          </div>
          <h1 className='banner_description'>{ trancate(movie.overview, 150)} </h1>
        </div>
        <div className="banner_fadebottom"></div>
      </header>
    </div>
  )
}

export default Banner