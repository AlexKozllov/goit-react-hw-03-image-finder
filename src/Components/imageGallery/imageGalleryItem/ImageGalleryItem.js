import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  & {
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }

  .ImageGalleryItem-image {
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .ImageGalleryItem-image:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

const ImageGalleryItem = ({ ApiResponse, openModal }) => {
  return ApiResponse.map((item) => {
    return (
      <ListItem key={item.id} className="ImageGalleryItem">
        <img
          src={item.webformatURL}
          alt={item.webformatURL}
          onClick={openModal}
          data-large={item.largeImageURL}
          className="ImageGalleryItem-image"
        />
      </ListItem>
    );
  });
};

export default ImageGalleryItem;
