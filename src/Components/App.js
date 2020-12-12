import React, { Component } from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import Loader from "react-loader-spinner";
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

  setSearch = (inputValue) => {
    this.setState({ search: inputValue, page: 1, ApiResponse: [] });
  };

  getImg = () => {
    const { search, page } = this.state;

    this.setState({ loading: true });
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
        this.setState({ loading: false });
      });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));

    this.getImg();
  };

  render() {
    const { ApiResponse, loading } = this.state;
    // console.log(ApiResponse);
    return (
      <div>
        <Searchbar setSearch={this.setSearch} getImg={this.getImg} />
        {ApiResponse.length !== 0 && <ImageGallery ApiResponse={ApiResponse} />}
        {loading && <Loader />}
        {ApiResponse.length !== 0 && (
          <BtnLoadMore handleLoadMore={this.handleLoadMore} />
        )}
      </div>
    );
  }
}

export default App;
