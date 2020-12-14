import React from "react";

const ImageGalleryItem = ({ ApiResponse, openModal }) => {
  return ApiResponse.map((item) => {
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
