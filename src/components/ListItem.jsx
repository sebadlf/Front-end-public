import React from "react";
import { Link } from "react-router-dom";

import "./ListItem.scss";

const ListItem = ({ item }) => {
  const { data } = item;
  const { id, title } = data;
  return (
    <div className="ListItem">
      <Link to={`/reddit/${id}`}>{title} </Link>
    </div>
  );
};

export default ListItem;
