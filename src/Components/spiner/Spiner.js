import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import s from "./spiner.module.css";

export default class App extends Component {
  render() {
    return (
      <Loader
        className={s.spiner}
        type="Grid"
        color="#3F51B5"
        height={80}
        width={80}
        // timeout={3000} //3 secs
      />
    );
  }
}
