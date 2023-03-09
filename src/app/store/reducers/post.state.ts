import { Post } from "../../models/post.model";

export interface PostState {
  posts: Post[];
  loading: boolean;
  createPostLoading: boolean;
  error: any;
}
