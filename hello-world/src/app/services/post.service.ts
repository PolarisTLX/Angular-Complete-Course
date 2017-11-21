// this file is all about working with the HTTP Calls / Services

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';


  constructor(private http: Http) { }

  // this is from the ngOnInit of post.component.ts
  getPosts() {
         // this.http.get(this.url)
    return this.http.get(this.url);
  }
  createPosts(post) {
        // this.http.post(this.url, JSON.stringify(post))
    return this.http.post(this.url, JSON.stringify(post));
  }
  updatePosts(post) {
        // this.http.put(this.url + '/' + post.id, JSON.stringify(post))
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post));
  }
  // deletePosts(post) {
  deletePosts(id) {
        // this.http.delete(this.url + '/' + post.id)
    return this.http.delete(this.url + '/' + id);
  }

}
