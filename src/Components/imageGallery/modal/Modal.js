import React, { Component } from "react";
import styled from "styled-components";

const ModalWindow = styled.div`
  & {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
  }

  .Modal {
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
  }
`;
class Modal extends Component {
  state = {};

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
      <ModalWindow className="Overlay" onClick={closeModal}>
        <div className="Modal">
          <img src={largeImageURL} alt="" />
        </div>
      </ModalWindow>
    );
  }
}

export default Modal;
