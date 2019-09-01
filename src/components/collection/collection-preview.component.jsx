import React from "react";
import "./collection.styles.scss";
import Carousel from "../carousel/carousel.component";

const Collection = ({ title, items }) => {
  <div className="collection-preview">
    <div className="collection-preview__title">{title}</div>
    {items.map(item => {
      <Carousel data={item} />;
    })}
  </div>;
};
