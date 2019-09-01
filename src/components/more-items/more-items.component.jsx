import React from "react";
import "./more-items.styles.scss";

const MoreItems = ({ item }) => {
  return <div className="container">{`More ${item.toUpperCase()}`}</div>;
};

export default MoreItems;
