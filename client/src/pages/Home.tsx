import { useEffect, useReducer } from "react";
import NewsSummaryCard from "../components/card/NewsSummaryCard";
import { newsDataType } from "../types/newsDataType";

interface NewsAction {
  type: "NEWS_LOADING" | "NEWS_SUCCESS" | "NEWS_ERROR";
  payload: newsDataType[];
}

interface NewsState {
  loading: boolean;
  newsData: newsDataType[];
  error: boolean;
}

const initialState = {
  loading: false,
  newsData: [],
  error: false,
};

function reducer(state: NewsState, action: NewsAction) {
  const { type, payload } = action;
  switch (type) {
    case "NEWS_LOADING":
      return {
        loading: true,
        newsData: [],
        error: false,
      };
    case "NEWS_SUCCESS":
      return {
        loading: false,
        newsData: payload,
        error: false,
      };
    case "NEWS_ERROR":
      return {
        loading: false,
        newsData: [],
        error: true,
      };
    default:
      return state;
  }
}

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const loadNews = async () => {
    try {
      dispatch({ type: "NEWS_LOADING", payload: [] });
      const res = await fetch(`http://localhost:5000/news`);
      const data = await res.json();
      dispatch({ type: "NEWS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "NEWS_ERROR", payload: [] });
    }
  };

  useEffect(() => {
    loadNews();
  }, []);
  return (
    <div>
      {state.newsData.map((news) => (
        <NewsSummaryCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Home;
