import React, { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "../components/Navbar/Searchbar.jsx";
import HorizontalList from "../components/HorizontalList/HorizontalList";
import HomeImage from "../assets/images/movies.jpg";
import Switch from "../components/Switch/Switch";
import SwitchStatus from "../components/Switch/SwitchStatus";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [collection, setCollection] = useState([]);
  const type = useSelector((state) => state.switch.switch);
  const status = useSelector((state) => state.switch.status);

  console.log(type)
  console.log(status)

  useEffect(() => {
    axios
      .get(`/api/${type}/${status}`)
      .then((res) => res.data.data)
      .then((data) => setCollection(data.results))
      .catch((err) => {
        console.log(err);
      });
  }, [type, status]);

  return (
    <div>
      <div class="relative">
        <img class='brightness-50'width="100%" src={HomeImage} alt="MovieTheater"></img>
        <h1 class="absolute text-6xl text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Welcome
        </h1>
        <h4 class="absolute text-3xl text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-0.5 pt-8">
          Find your favorite movies and TV shows
        </h4>

        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Searchbar />
        </div>
      </div>
      <div class="flex items-center pt-5 pb-2">
        <SwitchStatus
          firstLabel={"Popular"}
          firstValue={"popular"}
          thirdLabel={type === "movies" ? "Now Playing" : "Airing Today"}
          thirdValue={type === "movies" ? "nowplaying" : "airingtoday"}
          fourthLabel={"Top Rated"}
          fourthValue={"toprated"}
          fifthLabel={type === "movies" ? "Upcoming" : "On The Air"}
          fifthValue={type === "movies" ? "upcoming" : "ontheair"}
        />
        <Switch
          firstLabel={"Movies"}
          firstValue={"movies"}
          secondLabel={"TV"}
          secondValue={"tv"}
        />
      </div>

      <div>
        <HorizontalList collection={collection} />
      </div>
    </div>
  );
};

export default HomePage;
