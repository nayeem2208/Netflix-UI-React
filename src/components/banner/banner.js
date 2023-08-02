import React, { useEffect, useState } from "react";
import "./banner.css";
import { Api_Key, imageUrl } from "../../constants/constant";
import axios from "../../axios";
import YouTube from "react-youtube";

function Banner() {
  let [movie, setMovie] = useState();
  let [video, setVideo] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${Api_Key}&language=en-US`)
      .then((Response) => {
        let random = Math.floor(Math.random() * 20);
        console.log(Response.data.results[random]);
        setMovie(Response.data.results[random]);
      });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  let handlevideo = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${Api_Key}&language=en-US`)
      .then((Response) => {
        if (Response.data.results !== 0) {
          setVideo(Response.data.results[0]);
          console.log(video);
        }
      });
  };
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${
            movie ? imageUrl + movie.backdrop_path : ""
          })`,
        }}
      >
        <div className="content">
          <h1 className="title">
            {movie ? (movie.title ? movie.title : movie.name) : ""}
          </h1>
          <div className="banner_buttons">
            <button
              className="button"
              onClick={(e) => {
                handlevideo(movie.id);
              }}
            >
              Play
            </button>
            <button className="button">My list</button>
          </div>
          <h1 className="description">{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
      <div>
        {video && (
          <button
            className="closebutton"
            onClick={() => {
              setVideo(null);
            }}
          >
            x
          </button>
        )}
        {video && <YouTube videoId={video.key} opts={opts} />}
      </div>
    </>
  );
}

export default Banner;
