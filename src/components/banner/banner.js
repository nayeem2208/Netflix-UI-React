import React,{useEffect, useState} from "react";
import './banner.css'
import {Api_Key,imageUrl} from '../../constants/constant'
import axios from '../../axios'


function Banner() {
  let [movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${Api_Key}&language=en-US`).then( (Response)=>{
      let random=Math.floor(Math.random() * 20);
      console.log(Response.data.results[random])
      setMovie(Response.data.results[random])
    })
  },[])
  return (
    <div className="banner" style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}}>
      <div className="content">
        <h1 className="title">{movie? (movie.title?movie.title:movie.name):''}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">
          {movie? movie.overview:""}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
