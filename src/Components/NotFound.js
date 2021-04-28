import React from "react";
import { Link } from "react-router-dom";

// This shows up if you type in a slug that doesn't exist
// localhost:3000/post/qwerty or whatever link doesn't exist
const NotFound = () => (
  <article className="container pt-5">
    <h1>404 - Page not found</h1>
    <p>
      This page doesn't exist! <Link to="/">Return to Homepage</Link>
    </p>
  </article>
);

export default NotFound;
