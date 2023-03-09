import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { PostsService } from "../../services/posts.service";
import {
  loadPosts,
  loadPostsFailure,
  loadPostsSuccess,
  createPost,
  createPostSuccess,
  createPostFailure
} from "../actions/posts.actions";

@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      mergeMap(() =>
        this.postsService.getPosts().pipe(
          map((posts) => loadPostsSuccess({ posts })),
          catchError((error) => of(loadPostsFailure({ error })))
        )
      )
    )
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPost),
      mergeMap(({ post }) =>
        this.postsService.createPost(post).pipe(
          map(() => createPostSuccess({ post })),
          catchError((error) => of(createPostFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private postsService: PostsService) {}
}
