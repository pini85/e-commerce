import React from "react";
import "./card.styles.scss";

const Card = ({ property }) => {
  const exclusive = () => {
    if (property.exclusive === true) {
      return (
        <div className="card__exclusive-container">
          <div className="card__exclusive"> EXCLUSIVE </div>
        </div>
      );
    }
  };
  const sale = () => {
    if (property.sale === true) {
      return (
        <div className="card__sale-container">
          <div className="card__sale"> {property.salePercentage}% OFF! </div>
        </div>
      );
    }
  };
  return (
    <div className={`card card-${property.index}`}>
      <div className="card__img-container">
        {exclusive()}
        <img src={"" + property.imageUrl} className="card__img" alt="" />
        {sale()}
        <div className="card__bottom">
          <div className="card__title">{property.name}</div>

          <div className="card__price">{property.price}$</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
/*
 Having difficulty showing a dynamic image from my local files.
 I need to use require in order for webpack to understand you want to show the image 
 This works:
 <img src={require("../../assets/shop/shoes/1.png")} />
 but if I want to fetch it from an external jsx it doesnt work. Module not found:
    <img src={require("" + property.imageUrl)} alt="" />
    also not like this:
     <img src={require(property.imageUrl)} alt="" />
     So i had to fetch the images from outside


*/
