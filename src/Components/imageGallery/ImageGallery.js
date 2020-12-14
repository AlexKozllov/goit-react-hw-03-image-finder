import React, { Component } from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import Modal from "./modal/Modal";
import styled from "styled-components";

const List = styled.ul`
  & {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
`;
const INITIALSTATE = { largeImageURL: "", isOpenModal: false };
class ImageGallery extends Component {
  state = INITIALSTATE;

  openModal = (e) => {
    const { large } = e.target.dataset;
    this.setState({ largeImageURL: large, isOpenModal: true });
  };

  closeModal = (e) => {
    const { nodeName } = e.target;
    if (nodeName === "IMG") return;
    this.setState(INITIALSTATE);
  };

  closeModalESC = (e) => {
    if (e.key === "Escape") {
      this.setState(INITIALSTATE);
    }
  };

  render() {
    const { ApiResponse } = this.props;
    const { largeImageURL, isOpenModal } = this.state;
    return (
      <List className="ImageGallery">
        {isOpenModal && (
          <Modal
            largeImageURL={largeImageURL}
            closeModal={this.closeModal}
            closeModalESC={this.closeModalESC}
          />
        )}

        <ImageGalleryItem
          ApiResponse={ApiResponse}
          openModal={this.openModal}
        />
      </List>
    );
  }
}

export default ImageGallery;
