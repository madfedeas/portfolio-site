import React from "react";
import { Link } from "react-router-dom";

const Tracker = ({ isAuthentic, symptoms, deleteEntry, fixDate }) => (
  <article className="container">
    <h1>Symptoms Tracker</h1>
    <ul> {/* Only if user is logged in can they see the entries (private info) */}
      {!isAuthentic && <li key="empty">Login to see the tracker</li>}
        {isAuthentic && symptoms.length < 1 && <li key="empty">No entries yet!</li>}
          {isAuthentic && (
          symptoms.map(symp => (
            <li key={symp.key}>
            <h2>
              <Link to={`/tracker/${symp.slug}`}>{fixDate(symp.date)}</Link>
            </h2>
            <p>
            <Link to={`/edit/${symp.slug}`}>Edit</Link>
            {" |"}
            <button className="linkLike"
              onClick={event => {
                event.preventDefault();
                deleteEntry(symp);
              }}>Delete
            </button>
          </p>
      </li>
      )))}
    </ul>
  </article>
);

export default Tracker;
