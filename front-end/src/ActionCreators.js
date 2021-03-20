export const getData = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:8000/")
      .then(res => res.json())
      .then(res => {
        dispatch({ type: "get_all", news: res.reverse() });
      });
  };
};

export const setViews = () => {
  return (dispatch, setState, getState) => {
    dispatch({ type: "set_views" });
  };
};
