import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.interface';

@Injectable({
    providedIn: 'root'
  })
  

export class PostsService {

    url = 'http://localhost:3000/posts';

    constructor(private http: HttpClient){

    }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.url);
    }

    createPost(post: Post): Observable<any> {
        return this.http.post(this.url, post);
    } 

    updatePost(post: Post): Observable<any> {
        const url = `${this.url}/${post.id}`;

        return this.http.put(url, post);
    }

    deletePost(post: Post): Observable<any> {
        const url = `${this.url}/${post.id}`;

        return this.http.delete(url);
    }

}