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
  GET_NOTES,
  GET_NOTE,
} from "../../constants/action";

const initialState = {
  notes: null,
  note: null,
  error: null,
  notesSaved: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  //   console.log("reached", type);
  switch (type) {
    case GET_NOTES:
      return { ...state, loading: true };
    case GET_NOTES_SUCCESS:
      return { ...state, notes: payload.notes, loading: false };
    case GET_NOTES_FAILURE:
      return { ...state, error: payload, loading: false };
    case GET_NOTE:
      return { ...state, loading: true };
    case GET_NOTE_SUCCESS:
      return { ...state, note: payload.note, loading: false };
    case GET_NOTE_FAILURE:
      return { ...state, error: payload, loading: false };
    case EDIT_NOTES_SUCCESS:
      return { ...state, notesSaved: true };
    case EDIT_NOTES_FAILURE:
      return { ...state, error: payload };
    case DELETE_NOTES_SUCCESS:
      return state;
    case DELETE_NOTES_FAILURE:
      return { ...state, error: payload };
    case CREATE_NOTE_SUCCESS:
      return state;
    case CREATE_NOTE_FAILURE:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export default reducer;
