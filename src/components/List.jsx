import React from "react";

import "./List.scss";

const List = props => (
  <div className="List">
    <div className="List-Header">Header</div>
    <div className="List-Body">
      {props.list.map(item => (
        <div>{item.data.title}</div>
      ))}
    </div>
    <div className="List-Footer">Footer</div>
  </div>
);

List.defaultProps = {
  list: []
};

export default List;
