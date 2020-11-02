import React, { useState } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { connect } from "react-redux";
import { createNote } from "../../redux/Notes/action";
import { useHistory } from "react-router";
const CreateNote = ({ createNote, match, token }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();
  // console.log("token", token);
  const onSubmit = () => {
    const note = {
      title: match.params.title,
      text,
    };

    if (text) createNote(note, history);
  };
  return (
    <div>
      <h1>Create New note {match.params.title}</h1>

      <br />
      {error && (
        <div className="notes-error">
          <i class="fas fa-exclamation-triangle"></i> {error}
        </div>
      )}
      <div className="editor">
        <CKEditor
          editor={ClassicEditor}
          data="<p>Start writing your notes</p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
          }}
        />
      </div>
      <button className="btn btn-primary" onClick={onSubmit}>
        Create Note
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.currentUser.token,
});

const mapDispatchToProps = (dispatch) => ({
  createNote: (note, history) => dispatch(createNote(note, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);
