import { Action, createReducer, on } from "@ngrx/store";
import { NewPost } from "src/app/models/post.model";
import {
  loadPosts,
  loadPostsSuccess,
  loadPostsFailure,
  createPost,
  createPostSuccess,
  createPostFailure
} from "../actions/posts.actions";
import { PostState } from "./post.state";

export const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
  createPostLoading: false
};

export const postReducer = createReducer(
  initialState,
  on(loadPosts, (state) => ({ ...state, loading: true })),
  on(loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loading: false
  })),
  on(loadPostsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(createPost, (state) => {
    return {
      ...state,
      createPostLoading: true
    };
  }),
  on(createPostSuccess, (state, { post }: {post: NewPost}) => {
    return {
      ...state,
      createPostLoading: false,
      error: null,
      posts: [post, ...state.posts]
    };
  }),
  on(createPostFailure, (state, { error }) => {
    return {
      ...state,
      createPostLoading: false,
      error
    };
  })
);

export function reducer(state: PostState | undefined, action: Action) {
  return postReducer(state, action);
}
