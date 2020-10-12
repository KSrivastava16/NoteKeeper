import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./newNote.css";
import { getNotes } from "../../redux/Notes/action";
import { connect } from "react-redux";
const NewNote = ({ notes, show, closeModal }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  const onClose = () => {
    closeModal();
  };
  const history = useHistory();

  useEffect(() => {}, []);

  const CreateNote = (e) => {
    e.preventDefault();
    if (title) {
      const result = notes && notes.filter((note) => note.title === title);
      console.log(result);
      if (result.length === 0) history.push(`/createnote/${title}`);
      else setError("Note with same title already exists");
    } else {
      setError("Enter Title to continue");
    }
  };

  return (
    <div className={`modal-bg ${show}`}>
      <div className="note-modal">
        <div className="note-modal-header">
          <div className="note-modal-title">
            <h4>Create new note</h4>
          </div>
          <div className="close-icon" onClick={closeModal}>
            <i class="fas fa-times"></i>
          </div>
        </div>
        {error && (
          <div className="notes-error">
            <i class="fas fa-exclamation-triangle"></i> {error}
          </div>
        )}
        <form onSubmit={CreateNote}>
          <div className="note-modal-body">
            <label htmlFor="input">Enter your note title</label>
            <input
              type="text"
              className
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="button">Create Note</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notesReducer.notes,
});

const mapDispatchToProps = (dispatch) => ({
  getNotes: dispatch(getNotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewNote);
