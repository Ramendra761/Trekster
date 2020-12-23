import React, { useState, useEffect } from "react";
import axios from './axios';
import requests from './request';
import "./banner.css";

// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

 function Banner() {//setting up state
    const[movie,setMovies]=useState([]);
    //  const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {//use effect peice of code runs based on condition
        async function  fetchData(){
                   const request= await axios.get(requests.fetchNetflixOriginals);
                   setMovies(request.data.results[
                       Math.floor(Math.random()*request.data.results.length-1)]);
               return  request;

        }
        
        fetchData();
    }, []);
    // const opts = {
    //   height: "400px",
    //   width: "100%",
    //   PlayerVars: {
    //     autoplay: 1,
    //   },
    // };
    const handleClick = (movie) => {
      var next="YOU Have NOT SUBSCRIBED..!! Till Then Explore below features.."
      window.alert(next)
    //     setTrailerUrl("");
    //   } else {
    //     movieTrailer(movie?.name || "").then((url) => {
    //       const urlParams = new URLSearchParams(new URL(url).search);
    //       setTrailerUrl(urlParams.get("v"));
    //     });
    //   }
    };

    console.log(movie);
    function truncate(str,n){
        return str?.length> n ? str.substr(0,n-1)+"...":str;
    }

    return (
      <header
        className="banner"
        //add js and css
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="bannercont">
          <h1 className="title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          <div className="bannerbutton">
            <button className="banner_butt" onClick={() => handleClick(movie)}>
              {/*onClick={() => handleClick(movie)}*/}
              Play{" "}
            </button>
            <button className="banner_butt" onClick={() => handleClick(movie)}>
              List
            </button>
          </div>
          <h1 className="mov_desc">
            {/* /* movie?.overview */}
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="fade_bottom"></div>

        {/* {2 buttton} */}
        {/* {description} */}
      </header>
    );
}

export default Banner
