import React from 'react'
import HorizontalScroll from "react-horizontal-scrolling";
import Card from '../../commons/Card';

const Scroll = ({collection}) => {
  return (
    <HorizontalScroll>
    {collection.map((data) => (
      <div key={data.id}>
        <Card data={data}/>
      </div>
    ))}
  </HorizontalScroll>
  )
}

export default Scroll