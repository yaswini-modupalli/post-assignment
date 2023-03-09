import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostsCreateComponent } from "./posts-create/posts-create.component";

const routes: Routes = [
  { path: "", redirectTo: "/posts", pathMatch: "full" },
  { path: "posts", component: PostsListComponent },
  { path: "posts/new", component: PostsCreateComponent },
  { path: "**", redirectTo: "/posts" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
