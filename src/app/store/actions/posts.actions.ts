import { createAction, props } from "@ngrx/store";
import { NewPost, Post } from "../../models/post.model";

export const loadPosts = createAction("[Posts] Load Posts");
export const loadPostsSuccess = createAction(
  "[Posts] Load Posts Success",
  props<{ posts: Post[] }>()
);
export const loadPostsFailure = createAction(
  "[Posts] Load Posts Failure",
  props<{ error: string }>()
);

export const createPost = createAction(
  "[Post] Create Post",
  props<{ post: NewPost }>()
);
export const createPostSuccess = createAction(
  "[Post] Create Post Success",
  props<{ post: NewPost }>()
);
export const createPostFailure = createAction(
  "[Post] Create Post Failure",
  props<{ error: any }>()
);
