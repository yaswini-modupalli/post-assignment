import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../models/post.model";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  private readonly BASE_URL = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {}

  search(query: string): Observable<Post[]> {
    const url = `${this.BASE_URL}/posts?title_like=${query}`;
    return this.http.get<Post[]>(url);
  }
}
