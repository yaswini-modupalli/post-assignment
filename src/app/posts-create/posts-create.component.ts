import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { NewPost } from "../models/post.model";
import { createPost } from "../store/actions/posts.actions";
import { PostState } from "../store/reducers/post.state";
import {
  selectPostsError,
  selectPostsLoading
} from "../store/selectors/posts.selectors";

@Component({
  selector: "app-posts-create",
  templateUrl: "./posts-create.component.html",
  styleUrls: ["./posts-create.component.scss"]
})
export class PostsCreateComponent {
  newPost: NewPost = {
    id: Math.random() * 100,
    userId: 1,
    title: "",
    body: ""
  };
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store<PostState>, private router: Router) {
    this.loading$ = this.store.select(selectPostsLoading);
    this.error$ = this.store.select(selectPostsError);
  }

  createPost() {
    this.store.dispatch(createPost({ post: this.newPost }));
    this.router.navigate(["/", "posts"]);
  }
}
