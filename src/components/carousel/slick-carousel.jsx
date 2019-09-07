import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../card/card.component";

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true
    };

    return (
      <div className="test">
        <Slider {...settings}>
          {this.props.data.map(items => {
            return <Card key={items.id} property={items} />;
          })}
        </Slider>
      </div>
    );
  }
}
export default Carousel;
