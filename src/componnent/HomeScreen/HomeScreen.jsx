import React from 'react';
import Requests from '../axios/Requests';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Row from '../Rows/Row';
import './HomeScreen.css';

function HomeScreen() {
  return (
    <div className='HomeScreen'>
      <Navbar/>
      <Banner/>
      <Row sd='1' title='NETFLIX ORIGINALS' fetchUrl={Requests.fetchNetflixOriginals} largRow/>
      <Row sd='2' title='Trending Movie' fetchUrl={Requests.fetchTrending}/>
      <Row sd='3' title='Top Rated' fetchUrl={Requests.fetchTopRated}/>
      <Row sd='4' title='Action movies' fetchUrl={Requests.fetchActionMovies}/>
      <Row sd='5' title='Comedy movies' fetchUrl={Requests.fetchComedyMovies}/>
      <Row sd='6' title='Horror Movies' fetchUrl={Requests.fetchHorrorMovies}/>
      <Row sd='7' title='Romance Movies' fetchUrl={Requests.fetchRomanceMovies}/>
      <Row sd='8' title='Documentaries' fetchUrl={Requests.fetchDocumentaries }/>
    </div>
  )
}

export default HomeScreen