import React, { useState, useEffect } from 'react';
import axios from "./axios";
import "./row.css";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";



function Row({ title , fetchUrl,isLargeRow }) {
    const[movies , setMovies ]= useState([]);
     const [trailerUrl, setTrailerUrl] = useState("");
//a snippet which runs base on specific conditions
//use to load a row for ex netflixoriginals whole row

useEffect(()=>{
//if[], run once when the whole row load and dont run again
async function fetchData() {
const request=await axios.get(fetchUrl);
setMovies(request.data.results);

return request;
}
fetchData();
},[fetchUrl]);
//must have to have enter here when export from outside otherwise it will not render as it is from outside the block
const opts=
{
  height:"400",
  width:"100%",
  PlayerVars:{
    autoplay : 1,
    }
};
const handleClick=(movie)=>{
if(trailerUrl)
{setTrailerUrl('');
}
else
{
  movieTrailer(movie?.name||"")
  .then((url)=>{
    const urlParams=new URLSearchParams( new URL(url).search);
    setTrailerUrl(urlParams.get('v'));
  })
}
};
console.table(movies);
    return (
      <div className="row">
        {/* title */}
        <h2 className="title_r">{title}</h2>
        <div className="rowposter">
          {movies.map((movie) => (
            <img
            key={movie.id}//it doesnot re render whole row and just re render whats needed
              //className="row_poster"
               onClick={()=>handleClick(movie)}
              className={`row_poster ${isLargeRow && "row_posterlarge" }`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
        </div>
        {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts}/>}
        {/* container->posters*/}
      </div>
    );
}

export default Row

