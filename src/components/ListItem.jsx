import React from "react";
import { Link } from "react-router-dom";

import "./ListItem.scss";

const ListItem = ({ item }) => {
  const { data } = item;
  const { id, title, thumbnail, author, created, readed, num_comments } = data;

  const timeAgo = created;
  return (
    <div className="ListItem">
      <div className="ListItem-Header">
        <div className="ListItem-Readed">
          {!readed ? <span className="ListItem-ReadedMark" /> : null}
        </div>
        <div className="ListItem-Author">{author}</div>
        <div className="ListItem-TimeAgo">{timeAgo}</div>
      </div>
      <Link className="ListItem-Link" to={`/reddit/${id}`}>
        <div className="ListItem-Body">
          {thumbnail ? (
            <img className="ListItem-Image" src={thumbnail} alt={title} />
          ) : null}
          <div className="ListItem-Title">{title}</div>
          <div className="ListItem-Arrow">></div>
        </div>
      </Link>
      <div className="ListItem-Footer">
        <div className="ListItem-Dismiss">
          <span className="ListItem-DismissSymbol">X</span>
          Dismiss
        </div>
        <div className="ListItem-NumComments">{num_comments} Comments</div>
      </div>
    </div>
  );
};

export default ListItem;
