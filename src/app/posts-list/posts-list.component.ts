import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { Post } from "../models/post.model";
import { loadPosts } from "../store/actions/posts.actions";
import { clearSearchPosts, searchPost } from "../store/actions/search.actions";
import { PostState } from "../store/reducers/post.state";
import { debounceTime } from "rxjs/operators";
import {
  selectAllPosts,
  selectCreatePostsLoading,
  selectPostsError
} from "../store/selectors/posts.selectors";
import {
  selectSearchResults,
  selectSearchLoading
} from "../store/selectors/search.selectors";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.scss"]
})
export class PostsListComponent implements OnInit {
  public posts$: Observable<Post[]>;
  public isCreatePostsLoading$: Observable<boolean>;
  public error$: Observable<string>;

  public searchText: string | null;

  public searchResults$: Observable<Post[]>;
  public isSearchLoading$: Observable<boolean>;

  private searchSubject = new Subject<string>();

  constructor(private store: Store<PostState>) {
    this.store.dispatch(loadPosts());

    this.searchSubject
      .pipe(debounceTime(500))
      .subscribe((searchValue: string) => {
        this.store.dispatch(searchPost({ query: searchValue }));
        this.searchResults$ = this.store.select(selectSearchResults);
        this.isSearchLoading$ = this.store.select(selectSearchLoading);
      });
  }

  ngOnInit() {
    this.posts$ = this.store.select(selectAllPosts);
    this.isCreatePostsLoading$ = this.store.select(selectCreatePostsLoading);
    this.error$ = this.store.select(selectPostsError);
  }

  onSearch() {
    if (this.searchText) {
      this.searchSubject.next(this.searchText);
    } else {
      this.store.dispatch(clearSearchPosts())
    }
  }
}
