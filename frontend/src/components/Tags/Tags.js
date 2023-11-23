import React from "react";
import { Link } from "react-router-dom";

export default function Tags({ tags, forPage }) {
  return (
    <div style={{ justifyContent: forPage ? "start" : "center" }}>
      {tags.map((tag) => (
        <Link key={tag.name} to={`/tag/${tag.name}`}>
          {tag.name}
          {!forPage && `(${tag.count})`}
        </Link>
      ))}
    </div>
  );
}
