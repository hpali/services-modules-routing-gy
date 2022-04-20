import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts`).pipe(
     map(posts => {
       return posts.filter((post, index) => index < 10).map(post => ({id: post.id, title: post.title}));
     })
    );
  }

  getPostByid(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/guide/${id}`);
  }

  deletePostById(id: number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/guide/${id}`);
  }


}
