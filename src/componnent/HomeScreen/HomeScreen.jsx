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
      <Row title='NETFLIX ORIGINALS' fetchUrl={Requests.fetchNetflixOriginals} largRow/>
      <Row title='Trending Movie' fetchUrl={Requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={Requests.fetchTopRated}/>
      <Row title='Action movies' fetchUrl={Requests.fetchActionMovies}/>
      <Row title='Comedy movies' fetchUrl={Requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={Requests.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={Requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={Requests.fetchDocumentaries }/>
    </div>
  )
}

export default HomeScreen