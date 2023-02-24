import React from "react";
import Favorite from "../Favorite";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ data }) => {
  let type = "";
  data.title ? (type = "movies") : (type = "tv");
  
  return (
    <>
      <Link to={`/single/${type}/${data.id}`}>
        <div
          className="img-overlay-wrap max-w-sm rounded overflow-hidden shadow-lg"
          style={{ width: "160px" }}
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt={data.name ? data.name : data.title}
          />
          <div>
            <svg viewBox="0 0 36 36" class="circle-svg" fill="black">
              <path
                class="around"
                stroke-dasharray="100, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              ></path>

              <path
                class={data.vote_average > 8 ? "percent" : "percentMiddle"}
                stroke-dasharray={data.vote_average * 10}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              ></path>

              <text x="18" y="14" text-anchor="middle" dy="7" font-size="20">
                {data.vote_average}
              </text>
            </svg>
          </div>
        </div>
      </Link>
      <div className="pb-2">
        <div>
          <h6 className="text-xs">
            <strong>{data.name ? data.name : data.title}</strong>
          </h6>
        </div>
      </div>
      <Favorite card={"favoriteCard"}/>
    </>
  );
};

export default Card;
