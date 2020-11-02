import React from "react";
import { NavLink } from "react-router-dom";
import { deleteNote } from "../../redux/Notes/action";
import "../../Css/NoteItem.css";
import { connect } from "react-redux";
const NoteItem = ({ deleteNote, note }) => {
  const deleteNoteItem = (id) => {
    console.log("reached");
    deleteNote(id);
  };
  const regex = /(\<\w*)((\s\/\>)|(.*\<\/\w*\>))/;

  const checkRegex = (text) => {
    let a;
    let flag = true;
    let finalString = "";
    for (a of text) {
      flag = regex.test(a);
      // console.log("flag for", flag, a);
      if (!flag) finalString += a;
    }
    // console.log("finalString", finalString);
    return finalString;
  };

  return (
    <div className="flex-items">
      <h4>
        <strong>
          {" "}
          {note.title.length > 20
            ? note.title.slice(0, 20) + "..."
            : note.title}
        </strong>
      </h4>
      <p>{checkRegex(note.text.slice(0, 40))}</p>
      {note.createdAt && (
        <small>created At: {note.createdAt.slice(0, 10)}</small>
      )}

      {note.updatedAt ? (
        note.updatedAt !== note.createdAt ? (
          <small> | updated At: {note.updatedAt.slice(0, 10)}</small>
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <div className="note-item-footer">
        <NavLink
          className="button button-danger  ml-2 note-item-button"
          to={`editnote/${note._id}`}
        >
          Edit Or View Note
        </NavLink>
        <button
          className="button bg-danger note-item-button text-white"
          onClick={() => deleteNoteItem(note._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteNote: (id) => dispatch(deleteNote(id)),
});

export default connect(null, mapDispatchToProps)(NoteItem);
