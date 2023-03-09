import { createReducer, on } from "@ngrx/store";
import { searchPost, searchSuccess, clearSearchPosts } from "../actions/search.actions";
import { SearchState } from "./search.state";

export const initialState: SearchState = {
  results: [],
  loading: false
};

export const searchReducer = createReducer(
  initialState,
  on(searchPost, (state) => ({
    ...state,
    loading: true
  })),
  on(searchSuccess, (state, { results }) => ({
    ...state,
    results,
    loading: false
  })),
  on(clearSearchPosts, (state) => ({
    ...state,
    results: [],
    loading: false
  })),
);
