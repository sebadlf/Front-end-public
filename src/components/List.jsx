import React, { useState } from "react";
import cs from "classnames";

import ListItem from "./ListItem";

import "./List.scss";

const ListContent = props => (
  <React.Fragment>
    <div className="List-Header">Reddit Posts</div>
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
  </React.Fragment>
);

const List = props => {
  const [hover, setHover] = useState(false);

  const { isMobile, ...contentProps } = props;

  const listClasses = cs("List", {
    "List--Mobile": isMobile
  });

  return (
    <div
      className={listClasses}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!props.isMobile || hover ? <ListContent {...contentProps} /> : null}
    </div>
  );
};

List.defaultProps = {
  list: []
};

export default List;
