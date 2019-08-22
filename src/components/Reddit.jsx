import React from "react";

import "./Reddit.scss";

const Reddit = ({ reddit }) => {
  const { data } = reddit;
  const { title } = data;
  return <div>{title}</div>;
};

export default Reddit;
