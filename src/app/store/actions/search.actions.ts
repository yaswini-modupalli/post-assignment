import { createAction, props } from "@ngrx/store";
import { Post } from "../../models/post.model";

export const searchPost = createAction(
  "[Post] Search Post",
  props<{ query: string }>()
);
export const searchSuccess = createAction(
  "[Post] Search Post Success",
  props<{ results: Post[] }>()
);

export const clearSearchPosts = createAction(
  "[Post] Clear Search Post"
);
