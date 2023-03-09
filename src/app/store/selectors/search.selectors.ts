import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SearchState } from "../reducers/search.state";

export const selectSearchState = createFeatureSelector<SearchState>("search");

export const selectSearchResults = createSelector(
  selectSearchState,
  (state) => state.results
);

export const selectSearchLoading = createSelector(
  selectSearchState,
  (state) => state.loading
);
