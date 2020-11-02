import React, { useEffect, useState } from "react";
import NoteItem from "../components/Notes/NoteItem";
import { connect } from "react-redux";
import axios from "axios";
import NewNote from "../components/Notes/newNote";
import Ganeshya from "../images/Shree_Ganesh.jpg";
import "./Notes.css";
import { NavLink } from "react-router-dom";
import { getNotes } from "../redux/Notes/action";
import { getUser } from "../redux/auth/action";
import Loading from "../components/Loading/Loading";
const Notes = ({
  getUserInfo,
  getNotes,
  notes,
  jobs,
  history,
  user,
  logout,
  loading,
  authLoading,
}) => {
  const [modal, setModal] = useState(false);
  // const [notes, setNotes] = useState(null);
  const open = () => {
    setModal(true);
  };

  const close = () => {
    setModal(false);
  };
  console.log("user", user);
  useEffect(() => {
    getUserInfo();
    getNotes();
  }, []);
  console.log("authLoading", authLoading);
  console.log("loading", loading);
  return (
    <React.Fragment>
      {user ? (
        <div>
          <div className="user-info">
            <h4>
              <i className="fas fa-user-tie"></i>
              {!authLoading ? (
                <React.Fragment> Hi,{user && user.name}</React.Fragment>
              ) : (
                " User Loading"
              )}
            </h4>
            <br />
            <button className="button btn-primary" onClick={open}>
              Add new Note
            </button>
            <NewNote
              show={modal ? "show-modal" : "hide-modal"}
              closeModal={close}
            />
          </div>

          {!loading ? (
            <React.Fragment>
              {notes && notes[0] && (
                <h4 className="title">
                  {" "}
                  <i className="fas fa-clipboard"></i> Your Notes
                </h4>
              )}
              <div className="flex-container">
                {notes && notes ? (
                  notes &&
                  notes.map((note) => {
                    return <NoteItem note={note} key={note._id} />;
                  })
                ) : (
                  <h1>No Notes Add...</h1>
                )}
              </div>
            </React.Fragment>
          ) : (
            <Loading type="note" />
          )}
        </div>
      ) : loading ? (
        <Loading type="note" />
      ) : (
        <div>
          <h1>Hey please login to continue</h1>
          <NavLink to="/login" className="button bg-success text-warning">
            Login
          </NavLink>
        </div>
      )}
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    jobs: state.generalReducer.jobs,
    user: state.auth.userInfo,
    notes: state.notesReducer.notes,
    loading: state.notesReducer.loading,
    authLoading: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (history) => dispatch({ type: "LOGOUT", payload: history }),
    getNotes: () => dispatch(getNotes()),
    getUserInfo: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
