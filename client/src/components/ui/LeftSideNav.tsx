import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";

interface CategoryData {
  id: string;
  name: string;
}

interface CategoryState {
  loading: boolean;
  categories: [] | CategoryData[];
  error: boolean;
}

interface CategoryAction {
  type:
    | "FETCH_CATEGORIES_LOADING"
    | "FETCH_CATEGORIES_SUCCESS"
    | "FETCH_CATEGORIES_ERROR";
  payload: CategoryData[] | [];
}

const initialState = {
  loading: false,
  categories: [],
  error: false,
};

function reducer(state: CategoryState, action: CategoryAction) {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_CATEGORIES_LOADING":
      return {
        loading: true,
        categories: [],
        error: false,
      };
    case "FETCH_CATEGORIES_SUCCESS":
      return {
        ...state,
        loading: false,
        categories: payload,
      };
    case "FETCH_CATEGORIES_ERROR":
      return {
        ...state,
        error: true,
        categories: [],
      };
    default:
      return state;
  }
}

const LeftSideNav = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadCategories = async () => {
    dispatch({ type: "FETCH_CATEGORIES_LOADING", payload: [] });
    try {
      const res = await fetch("http://localhost:5000/news-categories");
      const data = (await res.json()) as CategoryData[];
      dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_CATEGORIES_ERROR", payload: [] });
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);
  return (
    <>
      {state.loading && <div>Loading</div>}
      <div>
        {state.categories.map((category) => (
          <div key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </div>
        ))}
      </div>
      {state.error && <div>Something went wrong</div>}
    </>
  );
};

export default LeftSideNav;
