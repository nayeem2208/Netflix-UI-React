import React, { useEffect, useState } from "react";
import "./rowPost.css";
import axios from "../../axios";
import {imageUrl } from "../../constants/constant";

function RowPost(props) {
  let [row, setRow] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((Response) => {

        setRow(Response.data.results);
        console.log('haai',row)

      });
  }, []);
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {row?.map((obj) => {
          return (
            <img
              className={props.isSmall?'smallPoster':"poster"}
              alt="poster"
              src={`${imageUrl+obj.backdrop_path}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RowPost;
