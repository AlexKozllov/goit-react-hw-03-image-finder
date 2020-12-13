import React, { Component } from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import Spiner from "./spiner/Spiner";

import BtnLoadMore from "./btnLoadMore/BtnLoadMore";
import imageApi from "../services/imageApi";

import "./App.css";

class App extends Component {
  state = {
    search: "",
    ApiResponse: [],
    page: 1,
    loading: false,
    // isOpenModal: false,
    // modalUrl: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page, ApiResponse } = this.state;
    if (prevState.search !== search) {
      this.getImg();
      return;
    }
    if (prevState.search !== search && ApiResponse.length !== 0) {
      this.resetState();
      return;
    }
    if (prevState.page !== page) this.getImg();
  }
  updateSearchValue = (value) => {
    this.setState({ search: value });
  };

  getImg = () => {
    const { search, page } = this.state;
    this.isLoading(true);

    imageApi
      .feachImgQuery(search, page)
      .then((response) => {
        this.setState((prevState) => ({
          ApiResponse: [...prevState.ApiResponse, ...response],
        }));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.isLoading(false);
      });
  };

  isLoading = (togle) => {
    this.setState({ loading: togle });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  resetState = async () => {
    this.setState({ page: 1, ApiResponse: [] });
  };

  render() {
    const { ApiResponse, loading } = this.state;

    return (
      <div>
        <Searchbar updateSearchValue={this.updateSearchValue} />
        {loading && <Spiner />}

        {ApiResponse.length !== 0 && <ImageGallery ApiResponse={ApiResponse} />}
        {ApiResponse.length > 0 && (
          <BtnLoadMore handleLoadMore={this.handleLoadMore} />
        )}
      </div>
    );
  }
}

export default App;
