import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostsCreateComponent } from "./posts-create/posts-create.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { PostEffects } from "./store/effects/posts.effects";
import { postReducer } from "./store/reducers/posts.reducer";
import { SearchEffects } from "./store/effects/search.effects";
import { searchReducer } from "./store/reducers/search.reducer";

@NgModule({
  declarations: [AppComponent, PostsListComponent, PostsCreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ posts: postReducer, search: searchReducer }),
    EffectsModule.forRoot([PostEffects, SearchEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
