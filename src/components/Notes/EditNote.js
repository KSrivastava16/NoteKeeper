import React, { useEffect, useState, useRef, useMemo } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useHistory } from "react-router";
import { editNote, deleteNote, getNote } from "../../redux/Notes/action";
import "./Editnote.css";
import { connect } from "react-redux";
import Loading from "../Loading/Loading";
const EditNote = ({
  note,
  deleteNote,
  notesSaved,
  editNotes,
  match,
  getNote,
  loading,
}) => {
  const [noteText, setNoteText] = useState();
  const [msgSaved, setmsgSaved] = useState(false);
  useEffect(() => {
    getNote(match.params.id);
  }, []);
  const history = useHistory();

  const onChange = (data) => {
    setNoteText(data);
    // setTimeout(() => {
    //   console.log("Executed");
    //   onSave();
    // }, 5000);
  };
  const onSave = () => {
    if (note && noteText) {
      const body = {
        text: noteText,
      };
      editNotes(note && note._id, body);
    }
  };
  const onDelete = () => {
    deleteNote(match.params.id, history);
  };

  return (
    <React.Fragment>
      {!loading ? (
        <div>
          <h2>
            {" "}
            <strong>{note && note.title}</strong>
          </h2>
          {notesSaved && (
            <div className="save-msg">
              <p>Your Notes Have been saved</p>
            </div>
          )}

          <div className="editor">
            <CKEditor
              editor={ClassicEditor}
              data={note && note.text ? note.text : "ABCDE"}
              onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data);
              }}
            />
          </div>
          <button className="button button-save" onClick={onSave}>
            Save
          </button>
          <button className="button button-delete" onClick={onDelete}>
            Delete
          </button>
        </div>
      ) : (
        <div>
          <Loading type="note" />
        </div>
      )}
    </React.Fragment>
  );
};

const mapSateToProps = (state) => ({
  notesSaved: state.notesReducer.notesSaved,
  note: state.notesReducer.note,
  loading: state.notesReducer.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    editNotes: (id, body) => dispatch(editNote(id, body)),
    deleteNote: (id, history) => dispatch(deleteNote(id, history)),
    getNote: (note_id) => dispatch(getNote(note_id)),
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(EditNote);
