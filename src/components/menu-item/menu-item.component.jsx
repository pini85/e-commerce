import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";
const MenuItem = ({ title, id, history, linkUrl, match }) => {
  return (
    <div
      className={`menu-item menu-item-` + id}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className={`menu-item__background menu-item__background-` + id}
      ></div>
      <div className={`menu-item__content menu-item__content-` + id}>
        <h2 className={` heading-secondary menu-item__content-title-` + id}>
          {" "}
          {title.toUpperCase()}{" "}
        </h2>
        <span className="menu-item__content-title">SHOP NOW!</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

/*
withRouter gives us the history object of the parent component which is HomePage. So we do not have to pass it as props to the children.
It does so because withRouter is a high order component.
Essentially it means it takes our component as an argument and spits out new a componnent and with that gives us the histroy object of the parent component
 */
