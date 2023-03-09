import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "../reducers/post.state";

export const selectPostsState = createFeatureSelector<PostState>("posts");

export const selectAllPosts = createSelector(
  selectPostsState,
  (state) => state.posts
);

export const selectCreatePostsLoading = createSelector(
  selectPostsState,
  (state) => state.createPostLoading
);

export const selectPostsLoading = createSelector(
  selectPostsState,
  (state) => state.loading
);

export const selectPostsError = createSelector(
  selectPostsState,
  (state) => state.error
);
