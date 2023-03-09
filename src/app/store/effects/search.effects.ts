import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { SearchService } from "../../services/search.service";
import { clearSearchPosts, searchPost, searchSuccess } from "../actions/search.actions";

@Injectable()
export class SearchEffects {
  searchPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchPost),
      switchMap(({ query }) => {
        return this.searchService
          .search(query)
          .pipe(map((results) => searchSuccess({ results })));
      })
    );
  });
  
  // clearSearchPosts$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(clearSearchPosts)
  //   );
  // });

  constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) {}
}
