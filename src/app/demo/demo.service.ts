import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http:HttpClient) { }

  getTitle(): Observable<any>{
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/1`)
      .pipe(
        map(post => post.body))
      ;
  }
}
