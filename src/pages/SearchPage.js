import React from "react";
import { useSelector } from "react-redux";
import Card from "../commons/Card/Card";

const SearchPage = () => {
  
  const searchedData = useSelector((state) => state.search);
  return (
    <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
      {searchedData.map((data) => (
        <div key={data.id}>
          <Card data={data} />
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
