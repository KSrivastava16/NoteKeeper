import {
  notesGetter,
  edit_Note,
  delete_note,
  create_note,
  get_Note,
} from "./methods";
import {
  GET_NOTES_SUCCESS,
  GET_NOTES_FAILURE,
  EDIT_NOTES_SUCCESS,
  EDIT_NOTES_FAILURE,
  DELETE_NOTES_SUCCESS,
  DELETE_NOTES_FAILURE,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_FAILURE,
  GET_NOTE_SUCCESS,
  GET_NOTE_FAILURE,
  GET_NOTE,
  GET_NOTES,
} from "../../constants/action";

export const createNoteSuccess = () => ({
  type: CREATE_NOTE_SUCCESS,
});

export const createNoteFailure = () => ({
  type: CREATE_NOTE_FAILURE,
});

export const createNote = (note, history) => {
  return (dispatch) => create_note(dispatch, note, history);
};

/*Single Note Fetching */
export const getNotesInitiate = () => ({ type: GET_NOTES });

export const getNoteSuccess = (note) => ({
  type: GET_NOTE_SUCCESS,
  payload: note,
});

export const getNoteFailure = (error) => ({
  type: GET_NOTE_FAILURE,
  payload: error,
});
export const getNoteInitiate = () => ({ type: GET_NOTE });
export const getNote = (note_id) => {
  console.log("Note getter");
  return (dispatch) => get_Note(dispatch, note_id);
};

/*Notes Fetching for particular user*/
export const getNotesSuccess = (notes) => ({
  type: GET_NOTES_SUCCESS,
  payload: notes,
});

export const getNotesFailure = (error) => ({
  type: GET_NOTES_FAILURE,
  payload: error,
});

export const getNotes = () => {
  return notesGetter;
};

export const editNoteSucess = () => ({
  type: EDIT_NOTES_SUCCESS,
});

export const editNoteFailure = (error) => ({
  type: EDIT_NOTES_FAILURE,
  payload: error,
});
export const editNote = (id, body) => {
  return (dispatch) => edit_Note(dispatch, id, body);
};

export const deleteNoteSuccess = () => ({
  type: DELETE_NOTES_SUCCESS,
});

export const deleteNoteFailure = (error) => ({
  type: DELETE_NOTES_FAILURE,
  payload: error,
});

export const deleteNote = (id, history) => {
  return (dispatch) => {
    delete_note(dispatch, id, history);
    dispatch(getNotes());
  };
};
