const intState = {
  news: [true],
  news_by_id: { isLoading: true },
  views: 0
};

const rootReducer = (state = intState, action) => {
  switch (action.type) {
    case "get_news":
      return { ...state, news: action.news };
    case "get_all":
      return { ...state, news: action.news };
    case "delete_all_news":
      return { ...state, news: [] };
    case "get_news_by_id":
      const news_by_id =
        state.news[0] === true
          ? state.news_by_id
          : state.news.filter(e => e.newsId === action.id)[0];
      return { ...state, news_by_id: news_by_id };
    case "set_views":
      return {
        ...state,
        views: JSON.parse(localStorage.getItem("views"))
      };
    default:
      return state;
  }
};

export default rootReducer;
