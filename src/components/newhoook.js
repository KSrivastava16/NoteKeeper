const newhook = (initialState) => {
  const value = initialState;
  const setValue = (newState) => {
    return { ...initialState, newState };
    console.log(value);
  };

  return [value, setValue];
};

export default newhook;
