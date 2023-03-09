import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NewPost, Post } from "../models/post.model";
import { tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { PostState } from "../store/reducers/post.state";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  private postsUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(
    private http: HttpClient,
    private store: Store<{ posts: PostState }>
  ) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  createPost(post: NewPost): Observable<Post> {
    return this.http
      .post<Post>("https://jsonplaceholder.typicode.com/posts", post)
      .pipe(
        tap((createdPost) => {
          this.store.dispatch({ type: "[Post] Add", post: createdPost });
        })
      );
  }
}
