import { Component, OnInit } from '@angular/core';
import {PostsService} from "./posts.service";
import {finalize} from "rxjs";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any[] | undefined ;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => this.handlePosts(posts));
  }

  handlePosts(posts: any[] | undefined){
    this.posts = posts;
  }

  deletePost(id: number){
    this.postsService.deletePostById(id).pipe(
      finalize(() => this.posts = this.posts?.filter(post => post.id))
    ).subscribe(() => {})
  }
}
