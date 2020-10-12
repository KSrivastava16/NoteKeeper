import React, { useEffect, useState, useRef, useMemo } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useHistory } from "react-router";
import { editNote, deleteNote, getNote } from "../../redux/Notes/action";
import "./Editnote.css";
import { connect } from "react-redux";

const EditNote = ({
  note,
  deleteNote,
  notesSaved,
  editNotes,
  match,
  getNote,
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
    <div>
      <h3> {note && note.title}</h3>
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
  );
};

const mapSateToProps = (state) => ({
  notesSaved: state.notesReducer.notesSaved,
  note: state.notesReducer.note,
});

const mapDispatchToProps = (dispatch) => {
  return {
    editNotes: (id, body) => dispatch(editNote(id, body)),
    deleteNote: (id, history) => dispatch(deleteNote(id, history)),
    getNote: (note_id) => dispatch(getNote(note_id)),
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(EditNote);
