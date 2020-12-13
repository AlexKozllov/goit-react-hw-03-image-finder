import React, { Component } from "react";
import imageApi from "../../services/imageApi";

class Searchbar extends Component {
  state = {
    value: "",
    search: "",
    ApiResponse: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { updateStateApp, resetState } = this.props;
    const { ApiResponse } = this.state;
    if (prevState.value !== this.state.value) resetState();
    if (prevProps.page !== this.props.page) this.getImg();
    if (prevState.ApiResponse !== this.state.ApiResponse)
      updateStateApp(ApiResponse);
  }

  handleChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getImg();
  };

  getImg = () => {
    const { value } = this.state;
    const { isLoading, page } = this.props;
    isLoading(true);
    imageApi
      .feachImgQuery(value, page)
      .then((response) => {
        this.setState({ ApiResponse: [...response] });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        isLoading(false);
      });
  };

  render() {
    const { value } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeInput}
            value={value}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
