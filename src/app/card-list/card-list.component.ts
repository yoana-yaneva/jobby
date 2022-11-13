import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { Post } from '../post.interface';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})


export class CardListComponent implements OnInit, OnDestroy {

  posts!: Post[];
  selectedPost!: Post;

  destroy$ = new Subject<boolean>();

  constructor(private postsService: PostsService) { 
    this.selectedPost = {
      title: '',
      content: '',
      author: '',
      publishDate: '',
      category: ''
    };
  }

  ngOnInit(): void {
    this.getContent();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onPostSubmit(post: Post): void {

    const newPost = {
      ...post,
      id: this.posts.length + 1,
      category: 'front-end'
    };

    if(!post.id) {
      this.postsService.createPost(newPost).subscribe(() => {
        this.getContent();
      }, (error) => {
        console.log(error);
      });

      return;
    }
    this.postsService.updatePost(newPost).subscribe(() => {
      this.getContent();
    }, (error) => {
      console.log(error);
    });
  }

  onPostSelected(post: Post): void {
    this.selectedPost = post;
  }

  onPostDelete(postId: number): void {
    // this.postsService.deletePost(postId).pipe(
    //   takeUntil(this.destroy$)
    // ).subscribe(_ => {
    //   this.getContent();
    // }, (error) => {
    //   console.log(error);
    // });
  }

  private getContent(): void {
    this.postsService.getPosts().pipe(
      takeUntil(this.destroy$)
    ).subscribe((response: Post[]) => {
      this.posts = response;
    }, (error) => {
      console.log(error);
    });
  }
}
