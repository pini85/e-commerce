import React, { Component } from "react";
import Slider from "react-slick";
import "./slick-carousel.styles.scss";
import Card from "../card/card.component";

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true
    };

    return (
      <div className="slick-carousel">
        <Slider {...settings}>
          {this.props.data.map(items => {
            return <Card key={items.id} item={items} />;
          })}
        </Slider>
      </div>
    );
  }
}
export default Carousel;
