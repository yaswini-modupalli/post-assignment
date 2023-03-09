import { Post } from "../../models/post.model";

export interface SearchState {
  results: Post[];
  loading: boolean;
}
