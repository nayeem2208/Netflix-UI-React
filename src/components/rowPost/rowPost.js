import React, { useEffect, useState } from "react";
import "./rowPost.css";
import axios from "../../axios";
import {imageUrl,Api_Key } from "../../constants/constant";
import YouTube from 'react-youtube'

function RowPost(props) {
  let [row, setRow] = useState([]);
  let [video,setVideo]=useState()
  useEffect(() => {
    axios
      .get(props.url)
      .then((Response) => {
        setRow(Response.data.results);
      });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }}
    let handlevideo=(id)=>{
      
      axios.get(`/movie/${id}/videos?api_key=${Api_Key}&language=en-US`).then((Response)=>{
      if(Response.data.results!==0){
        setVideo(Response.data.results[0])
        console.log(video)
      }
    })
    }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {row?.map((obj) => {
          return (
            <img onClick={(e)=>{
              handlevideo(obj.id)
            }}
              className={props.isSmall?'smallPoster':"poster"}
              alt="poster"
              src={`${imageUrl+obj.backdrop_path}`}
            />
          );
        })}
      </div>
      {video && <button className="closebutton" onClick={()=>{setVideo(null)}}>x</button>}
     {video && <YouTube videoId={video.key} opts={opts}/>}
    </div>
  );
}

export default RowPost;
