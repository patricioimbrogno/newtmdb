import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../commons/Card/Card.css";
import Favorite from "../commons/Favorite";
import axios from "axios";

const SinglePage = () => {
  const [collection, setCollection] = useState([]);

  const { id, type } = useParams();

  useEffect(() => {
    axios
      .get(`/api/${type}/single/${id}`)
      .then((res) => setCollection(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(collection);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original/${collection.backdrop_path}")`,
      }}
      className="text-white bg-center bg-cover "
    >
      <div className="flex flex-col px-24 pt-7 items-start">
        <div className="flex flex-row">
          <h1 className="text-5xl">{collection.title}</h1>
          <h1 className="text-5xl ml-1">
            (
            {collection.release_date ? collection.release_date.slice(0, 4) : ""}
            )
          </h1>
        </div>

        <div className="flex flex-row">
          {collection.genres
            ? collection.genres.map((g) => (
                <h1 className="mr-1">{g.name} • </h1>
              ))
            : ""}
          <div>
            <p>{collection.runtime} m</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div>
          <img
            className="mx-24 my-24"
            src={`https://image.tmdb.org/t/p/w500/${collection.poster_path}`}
            alt="image"
          ></img>
        </div>
        <div className="my-24 mx-48 flex flex-col">
          
          <p className="text-start text-2xl font-bold">Overview</p>
          <p className="text-justify">{collection.overview}</p>
          <div className="flex flex-row">
              <Favorite card={"favoriteSinglePage"} />
              <svg viewBox="0 0 36 36" className="circleSinglePage" fill="black">
                <path
                  class="around"
                  stroke-dasharray="100, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                ></path>

                <path
                  class={
                    collection.vote_average > 8 ? "percent" : "percentMiddle"
                  }
                  stroke-dasharray={collection.vote_average * 10}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                ></path>

                <text x="18" y="14" text-anchor="middle" dy="7" font-size="20">
                  {collection.vote_average ? collection.vote_average.toFixed(1):""}
                </text>
              </svg>
            </div>
        </div>
       
      </div>
    </div>
  );
};

export default SinglePage;
