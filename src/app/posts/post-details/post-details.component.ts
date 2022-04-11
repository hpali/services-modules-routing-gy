import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postId: number | undefined;
  post:any;

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.postId = +params['id'];
      this.postsService.getPostByid(this.postId).subscribe(post => this.post = post);
    });
  }

}
