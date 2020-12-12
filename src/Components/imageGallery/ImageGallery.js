import React from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ ApiResponse }) => {
  // console.log(ApiResponse);
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem ApiResponse={ApiResponse} />
    </ul>
  );
};

export default ImageGallery;
