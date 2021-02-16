import React from "react";

const Link = (props) => {
  return (
    <li>
      <a href={props.url}>{props.text}</a>
    </li>
  );
};

export default Link;
