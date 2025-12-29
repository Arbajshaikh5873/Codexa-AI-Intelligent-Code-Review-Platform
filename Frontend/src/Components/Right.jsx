import React from "react";
import Markdown from "react-markdown";

function Right({ review }) {
  return (
    <div className="right">
      <Markdown>{review}</Markdown>
    </div>
  );
}

export default Right;
