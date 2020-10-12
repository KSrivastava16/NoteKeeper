import React from "react";
import { NavLink } from "react-router-dom";
import "./NoteItem.css";
const NoteItem = ({ note }) => {
  return (
    <div className="flex-items">
      <h4>
        {note.title.length > 20 ? note.title.slice(0, 20) + "..." : note.title}
      </h4>
      <p>{note.text.slice(3, 40)}</p>
      {note.createdAt && <small>created At: {Date(note.createdAt)}</small>}
      <br />
      {note.updatedAt ? (
        note.updatedAt !== note.createdAt ? (
          <small>updated At: {Date(note.updatedAt)}</small>
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <br />
      <NavLink to={`editnote/${note._id}`}>Edit Or View Note</NavLink>
    </div>
  );
};

export default NoteItem;
