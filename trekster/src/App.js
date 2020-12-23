import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from'./Nav';


// import react youtube npm i react-youtube   npm i movie-trailer

function App() {
  return (
    <div className="App">
      <Nav/> 
      <Banner />

      <Row
        title="TREKSTER ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow //={true} for larger row
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romantic" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documantaries" fetchUrl={requests.fetchDocumentariesMovies} />
    </div>
  );
}

export default App;
// fetchActionMovies;