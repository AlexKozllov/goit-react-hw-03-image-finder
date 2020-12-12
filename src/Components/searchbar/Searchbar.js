import React, { Component } from "react";

class Searchbar extends Component {
  state = { value: "" };

  handleChangeInput = (e) => {
    // e.preventDefault();
    this.setState({ value: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { value } = this.state;
    const { setSearch, getImg } = this.props;

    await setSearch(value);
    getImg();
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
