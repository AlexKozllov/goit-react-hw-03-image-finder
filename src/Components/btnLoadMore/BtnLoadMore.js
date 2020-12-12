import React from "react";

const BtnLoadMore = ({ handleLoadMore }) => {
  return (
    <button type="button" onClick={handleLoadMore}>
      Load More
    </button>
  );
};

export default BtnLoadMore;

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });
