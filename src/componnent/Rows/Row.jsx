import axios from '../axios/axios';
import React, { useEffect, useState } from 'react'
import './Rowi.css'
import Requests from '../axios/Requests';
function Row({ title, fetchUrl, largRow = false }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();

  }, [fetchUrl]);
  // console.log(movies);
  return (

    <div className='row'>
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) =>
          // console.log(`${Requests.img}${movie.poster_path}`);

          <img className={ `row_poster `} key={movie.id} alt={movie.name} src={`${Requests.img}${largRow ? movie.poster_path : movie.backdrop_path}`} />

        )}
      </div>

    </div>

  )
}

export default Row