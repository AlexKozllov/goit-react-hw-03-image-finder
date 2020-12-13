import React from "react";
import keydown from "react-keydown";

const ImageGalleryItem = ({ ApiResponse, openModal }) => {
  // console.log(ApiResponse);
  return ApiResponse.map((item) => {
    // console.log(item.webformatURL);
    return (
      <li key={item.id} className="ImageGalleryItem">
        <img
          src={item.webformatURL}
          alt={item.webformatURL}
          onClick={openModal}
          data-large={item.largeImageURL}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
