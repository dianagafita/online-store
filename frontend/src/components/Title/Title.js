import React from "react";

export default function Title({ title, fontSize, margin }) {
  return (
    <h1
      style={{
        fontSize: "1.3rem",
        marginTop: "1.5rem",
        color: "rgb(100, 100, 100)",
        marginLeft: "5rem",
      }}
    >
      {title}
    </h1>
  );
}
