import React from "react";

const ImageGalleryItem = ({ ApiResponse }) => {
  console.log(ApiResponse);
  return ApiResponse.map((item) => {
    // console.log(item.webformatURL);
    return (
      <li key={item.id} className="ImageGalleryItem">
        <img
          src={item.webformatURL}
          alt={item.webformatURL}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
