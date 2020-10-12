const intialState = {
  loginStatus: false,
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "SEARCH_INFO":
      return { ...state, jobs: [...state.jobs, action.payload] };
    default:
      return state;
  }
};

export default reducer;
/*jobs: [
    {
      job_title: "REACT DEV",
      location: "NGP INDIA",
      Salary: "10L",
      Description: "Should be good",
    },
    {
      job_title: "JAVA DEV",
      location: "NGP INDIA",
      Salary: "10L",
      Description: "Should be good",
    },
    {
      job_title: "Python DEV",
      location: "NGP INDIA",
      Salary: "10L",
      Description: "Should be good",
    },
    {
      job_title: "Node DEV",
      location: "NGP INDIA",
      Salary: "10L",
      Description: "Should be good",
    },
  ]*/
