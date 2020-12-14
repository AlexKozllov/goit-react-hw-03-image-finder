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
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search) this.resetState();

    if (prevState.search !== search && prevState.page === 1) {
      this.getImg();
      return;
    }
    if (prevState.page !== page) this.getImg();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (page > 1) this.scrollingToEnd();
    return null;
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
        console.log("error");
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

  resetState = () => {
    this.setState({ page: 1, ApiResponse: [] });
  };

  scrollingToEnd = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
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
