import React, { useState } from "react";
import "../commons/Card/Card.css";

const Favorite = ({ card }) => {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <button
      
      onClick={handleFavorite}
      className={
        favorite
          ? `bg-black border-solid border-2 border-rose-600 text-white py-2 px-2 rounded-full inline-flex items-center tooltip ${card}`
          : `bg-black border-solid border-2 border-rose-600 text-white py-2 px-2 rounded-full inline-flex items-center tooltip ${card}`
      }
    >
      <span class="tooltiptext">Add to favorites</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="#ff0000"
        class="bi bi-heart-fill"
        viewBox="0 0 16 16"
        id="IconChangeColor"
      >
        {" "}
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          id="mainIconPathAttribute"
          fill={favorite ? "#ff0000" : "#ffffff"}
        ></path>{" "}
      </svg>
    </button>
  );
};

export default Favorite;
