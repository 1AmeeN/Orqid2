import React from "react";
import { Link } from "react-router-dom";
export default function Jshome() {
  return (
    <div className="Jshome">
      <h1>Login to see contents</h1>
      <Link className="Go" to="/">
        <h1>ORQID</h1>
      </Link>
    </div>
  );
}
