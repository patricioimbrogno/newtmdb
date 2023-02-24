import React from "react";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Card from "../../commons/Card/Card"
import './HorizontalList.css'

const HorizontalList = ({collection}) => {

  return (
    <div>
      <ScrollMenu itemClassName="menu-item">
        {collection.map((data) => (
          <div key={data.id}>
            <Card data={data} />
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default HorizontalList;
