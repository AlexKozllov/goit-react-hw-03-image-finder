import React, { Component } from "react";

class Modal extends Component {
  state = {};
  escFunction = (e) => {
    console.log(e.target);
  };

  componentDidMount() {
    const { closeModalESC } = this.props;
    document.addEventListener("keydown", closeModalESC);
  }

  componentWillUnmount() {
    const { closeModalESC } = this.props;
    document.removeEventListener("keydown", closeModalESC);
  }

  render() {
    const { largeImageURL, closeModal } = this.props;
    return (
      <div className="Overlay" onClick={closeModal}>
        <div className="Modal">
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
