import React from "react";

import "./Reddit.scss";

const Reddit = ({ reddit }) => {
  const { data } = reddit;
  const { author, title, thumbnail } = data;
  return (
    <div className="Reddit">
      <div className="Reddit-Author">{author}</div>
      {thumbnail ? (
        <div className="Reddit-Image">
          <img src={thumbnail} alt={title} />
        </div>
      ) : null}
      <div className="Reddit-Title">{title}</div>
    </div>
  );
};

export default Reddit;
