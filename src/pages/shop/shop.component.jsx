import React from "react";
import SHOP_DATA from "./shop.data";
import Carousel from "../../components/carousel/carousel.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    return (
      <div>
        <Carousel data={SHOP_DATA[0].items}></Carousel>
      </div>
    );
  }
}
export default ShopPage;
