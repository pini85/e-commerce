import React from "react";
import SHOP_DATA from "./shop.data";
import Carousel from "../../components/carousel/slick-carousel";
import MoreItems from "../../components/more-items/more-items.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const sixItems = this.state.collections.map(data => {
      return data.items.splice(1, 6);
    });

    return (
      <div>
        {sixItems.map(items => {
          const title = items.title;
          return (
            <div>
              <Carousel data={items}></Carousel>
              {/* <div>
                  <MoreItems item={items.title}></MoreItems>
                </div> */}
            </div>
          );
        })}
      </div>
    );
  }
}
export default ShopPage;
