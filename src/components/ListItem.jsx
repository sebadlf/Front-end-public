import React from "react";

import "./ListItem.scss";

const ListItem = ({ item }) => {
  const { data } = item;
  const { title } = data;
  return <div className="ListItem">{title}</div>;
};

export default ListItem;
