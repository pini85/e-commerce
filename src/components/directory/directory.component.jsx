import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "sale",
          image: "",
          id: 1,
          linkUrl: "sale"
        },
        {
          title: "exclusive",
          image: "",
          id: 2,
          linkUrl: "exclusive"
        },
        {
          title: "popular",
          image: "",
          id: 3,
          linkUrl: "popular"
        },
        {
          title: "Mens",
          image: "",
          id: 4,
          linkUrl: "mens"
        },
        {
          title: "Womens",
          image: "",
          id: 5,
          linkUrl: "womens"
        }
      ]
    };
  }
  render() {
    return (
      <div className="menu-directory">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} id={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
