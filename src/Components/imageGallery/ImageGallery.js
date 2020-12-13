import React, { Component } from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import Modal from "./modal/Modal";

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
      <ul className="ImageGallery">
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
      </ul>
    );
  }
}

export default ImageGallery;
