import { Component, OnInit } from '@angular/core';
import {PostsService} from "./posts.service";

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
    this.postsService.deletePostById(id).subscribe(() => {
      // @ts-ignore
      this.posts = this.posts.filter(post => post.id !== id);
    })
  }
}
