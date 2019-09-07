import React from "react";
import "./carousel.styles.scss";
import Card from "../card/card.component";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.data.title,
      items: props.data.items,
      item: props.data.items[0]
    };
  }

  nextProperty = () => {
    const newIndex = this.state.item.index + 1;
    this.setState({
      item: this.props.data.items[newIndex]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.item.index - 1;
    this.setState({
      item: this.props.data.items[newIndex]
    });
  };

  render() {
    const { item, items, title } = this.state;

    return (
      <div className="container">
        <h2 className="heading-secondary">{title}</h2>
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
