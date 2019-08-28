import React from "react";
import "./carousel.styles.scss";
import Card from "../card/card.component";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.data,
      item: props.data[0]
    };
  }

  nextProperty = () => {
    const newIndex = this.state.item.index + 1;
    this.setState({
      item: this.props.data[newIndex]
    });
    console.log(this.state.item);
  };

  prevProperty = () => {
    const newIndex = this.state.item.index - 1;
    this.setState({
      item: this.props.data[newIndex]
    });
    console.log(this.state.item);
  };

  render() {
    const { item, items } = this.state;
    return (
      <div className="container">
        <div className="button-container">
          <div className="prev__button-wrapper">
            <button
              className="prev__button"
              onClick={() => this.prevProperty()}
              disabled={item.index === 0}
            >
              <span>></span>
            </button>
          </div>
          <div className="next__button-wrapper">
            <button
              className="next__button"
              onClick={() => this.nextProperty()}
              disabled={item.index === items.length - 1}
            >
              <span>></span>
            </button>
          </div>
        </div>
        <div className={`cards-slider active-slide-${item.index}`}>
          <div className="col">
            <div
              className="cards-slider__wrapper"
              style={{
                transform: `translateX(-${item.index * (100 / items.length)}%)`
              }}
            >
              {items.map(item => {
                return (
                  <Card
                    key={item.id}
                    property={item}
                    index={this.state.item.index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
