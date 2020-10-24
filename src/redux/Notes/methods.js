import {
  getNotesSuccess,
  getNotesFailure,
  editNoteSucess,
  editNoteFailure,
  deleteNoteSuccess,
  deleteNoteFailure,
  createNoteSuccess,
  createNoteFailure,
  getNoteSuccess,
  getNoteFailure,
  getNotes,
  getNotesInitiate,
  getNoteInitiate,
} from "./action";

import auth from "../authoraization";
export const notesGetter = async (dispatch) => {
  console.log(process.env.REACT_APP_API);
  dispatch(getNotesInitiate());
  try {
    const result = await fetch(`${process.env.REACT_APP_API}/note`, {
      headers: { "auth-token": auth() },
    });

    const response = await result.json();

    if (response.err) throw response.err;
    console.log("response for ntoes", response);
    dispatch(getNotesSuccess(response));
    // dispatch(getNotesSuccess(response));
  } catch (error) {
    dispatch(getNotesFailure(error));
  }
};

export const edit_Note = async (dispatch, id, body) => {
  try {
    const result = await fetch(
      `${process.env.REACT_APP_API}/note/editnote?id=${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json", "auth-token": auth() },
      }
    );
    const response = await result.json();
    console.log("response", response);
    if (response.err) throw response.err;
    dispatch(editNoteSucess());
  } catch (error) {
    dispatch(editNoteFailure(error));
  }
};

export const delete_note = async (dispatch, id, history) => {
  try {
    const result = await fetch(
      `${process.env.REACT_APP_API}/note/delete?id=${id}`,
      {
        method: "DELETE",
        headers: { "auth-token": auth() },
      }
    );

    const response = await result.json();
    if (response.err) throw response.err;
    history.push("/Notes");
    dispatch(deleteNoteSuccess());
  } catch (error) {
    dispatch(deleteNoteFailure(error));
  }
};

export const create_note = async (dispatch, note, history) => {
  try {
    const result = await fetch(`${process.env.REACT_APP_API}/note/newNote`, {
      method: "POST",
      headers: { "auth-token": auth(), "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });

    const response = await result.json();
    if (response.err) throw response.err;
    history.push("/Notes");
    dispatch(createNoteSuccess());
  } catch (error) {
    dispatch(createNoteFailure(error));
  }
};

export const get_Note = async (dispatch, id) => {
  console.log("Note getter");
  dispatch(getNoteInitiate());
  try {
    const result = await fetch(
      process.env.REACT_APP_API + `/note/getNote?id=${id}`
    );
    const response = await result.json();
    console.log("response", response);
    if (response.err) throw Error(response.err);
    dispatch(getNoteSuccess(response));
  } catch (error) {
    dispatch(getNoteFailure());
  }
};
