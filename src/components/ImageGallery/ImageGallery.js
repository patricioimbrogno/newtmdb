import React from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGallery.css";

const ImageGallery = (props) => {
  const imageList = props?.images?.map((image) => {
    return {
      original: `https://image.tmdb.org/t/p/w1280/${image}`,
      thumbnail: `https://image.tmdb.org/t/p/w1280/${image}`,
    };
  });

  return (
    <div>
      <Gallery
        items={imageList}
        showNav={false}
        showFullscreenButton={false}
        autoPlay={true}
        showPlayButton={false}
        showThumbnails={false}
      ></Gallery>
    </div>
  );
};

export default ImageGallery;
