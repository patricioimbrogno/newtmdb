import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../../state/search";

const Searchbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchedValue, setSearchedValue] = useState("");
  const queryParams = new URLSearchParams(window.location.search);
  const query = queryParams.get("query");

  const handleSearch = (e) => {
    setSearchedValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`/api/search?query=${searchedValue}`)
      .then((res) => res.data.data)
      .then((data) => dispatch(setSearch(data.results)))
      .then(() => navigate(`/search?query=${searchedValue}`))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`/api/search?query=${query}`)
      .then((res) => res.data.data)
      .then((data) => dispatch(setSearch(data.results)))
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  return (
    <form onSubmit={handleSubmit} class="flex items-center w-96">
      <label for="voice-search" class="sr-only">
        Search
      </label>
      <div class="relative w-full">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          value={searchedValue}
          onChange={handleSearch}
          type="text"
          id="voice-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="Search for a movie or tv show..."
          required
        />
      </div>
    </form>
  );
};

export default Searchbar;
