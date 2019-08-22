import React from "react";

import ListItem from "./ListItem";

import "./List.scss";

const List = props => (
  <div className="List">
    <div className="List-Header">Header</div>
    <div className="List-Body">
      {props.list.map(item => (
        <ListItem
          key={item.data.id}
          item={item}
          dismissPost={props.dismissPost}
        />
      ))}
    </div>
    <div className="List-Footer">
      <span className="List-DismissAll" onClick={props.dismissAll}>
        Dismiss All
      </span>
    </div>
  </div>
);

List.defaultProps = {
  list: []
};

export default List;
