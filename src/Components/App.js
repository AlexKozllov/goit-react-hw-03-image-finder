import React, { Component } from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import Loader from "react-loader-spinner";
import BtnLoadMore from "./btnLoadMore/BtnLoadMore";
// import imageApi from "../services/imageApi";

import "./App.css";

class App extends Component {
  state = {
    ApiResponse: [],
    page: 1,
    loading: false,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.search !== this.state.search) this.getImg();
  // }

  // setSearch = (inputValue) => {
  //   this.setState({ search: inputValue, page: 1, ApiResponse: [] });
  // };

  // getImg = () => {
  //   const { search, page } = this.state;

  //   this.setState({ loading: true });
  //   imageApi
  //     .feachImgQuery(search, page)
  //     .then((response) => {
  //       this.setState((prevState) => ({
  //         ApiResponse: [...prevState.ApiResponse, ...response],
  //       }));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       this.setState({ loading: false });
  //     });
  // };

  updateStateApp = (ApiResponse) => {
    console.log(ApiResponse);
    this.setState((prevState) => ({
      ApiResponse: [...prevState.ApiResponse, ...ApiResponse],
    }));
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

  render() {
    const { ApiResponse, loading, page } = this.state;

    return (
      <div>
        <Searchbar
          updateStateApp={this.updateStateApp}
          isLoading={this.isLoading}
          resetState={this.resetState}
          page={page}
        />
        {ApiResponse.length !== 0 && <ImageGallery ApiResponse={ApiResponse} />}
        {loading && <Loader />}
        {ApiResponse.length > 0 && (
          <BtnLoadMore handleLoadMore={this.handleLoadMore} />
        )}
      </div>
    );
  }
}

export default App;
