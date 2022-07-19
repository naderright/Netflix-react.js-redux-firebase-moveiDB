import axios from '../axios/axios';
import React, { useEffect, useState } from 'react'
import './Rowi.css'
import Requests from '../axios/Requests';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function Row({ title, fetchUrl, largRow = false ,sd}) {
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
  const slidRight =()=>{
    let slider = document.getElementById(`slid ${sd}`);
    let icon = document.getElementById(`scroll ${sd}`);
    // console.log(slider.scrollLeft);
    slider.scrollLeft = slider.scrollLeft + 500 ;
    icon.style.display= 'block'

  }

  const slidLeft =()=>{
    let slider = document.getElementById(`slid ${sd}`);
    let icon = document.getElementById(`scroll ${sd}`);
    if (slider.scrollLeft === 500 ) {
      slider.scrollLeft = slider.scrollLeft - 500 ;
      icon.style.display= 'none'
    }else{
      slider.scrollLeft = slider.scrollLeft - 500 ;
    }
      
  };


  return (

    <div className='row'>
      <h2>{title}</h2>
      <FaAngleLeft className='scrollRight' id={`scroll ${sd}`} onClick={slidLeft} />
      <div className="row_posters" id={`slid ${sd}`}>

        {movies.map((movie) =>
          // console.log(`${Requests.img}${movie.poster_path}`);

          <img className={`row_poster `} id={title === 'NETFLIX ORIGINALS'?'original':''} key={movie.id} alt={movie.name} src={`${Requests.img}${largRow ? movie.poster_path : movie.backdrop_path}`} />

        )}
      </div>
      <FaAngleRight className='scrollLeft' onClick={slidRight}/>
    </div>

  )
}

export default Row