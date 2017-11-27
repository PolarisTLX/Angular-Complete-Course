// this file is all about working with the HTTP Calls / Services

// the content of this file was moved again into this from from post.service.ts
// it was then modified to be more generic, and less specific about "posts"

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// to handle errors:
import { Observable } from 'rxjs/Observable';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input-error';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
// export class PostService {
export class DataService {

  // private url = 'http://jsonplaceholder.typicode.com/posts';
  // simulating an ERROR by giving an invalid URL - simluates a "Network is Down" where user cannot reach the destination
  //  private url = 'http://ABCjsonplaceholder.typicode.com/posts';


  constructor(private url: string, private http: Http) { }

  // this is from the ngOnInit of post.component.ts
  getAll() {
  // getPosts() {
         // this.http.get(this.url)
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }
  create(resource) {
    // to simulate error to test "optimistic" action is undone when there is an error:
    // return Observable.throw(new AppError());

  // createPosts(post) {
        // this.http.post(this.url, JSON.stringify(post))
    // return this.http.post(this.url, JSON.stringify(post))
    return this.http.post(this.url, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
    // since code is repeated, taken out to re-useable function/method below
    // .catch((error: Response) => {
    //   if (error.status === 400) {
    //     return Observable.throw(new BadInput(error.json()));
    //   } else {
    //     return Observable.throw(new AppError(error.json()));
    //   }
    // });
  }
  update(resource) {
  // updatePosts(post) {
        // this.http.put(this.url + '/' + post.id, JSON.stringify(post))
    // return this.http.put(this.url + '/' + post.id, JSON.stringify(post))
    return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }
  // deletePosts(post) {
  delete(id) {
  // deletePosts(id) {
    // to simulate error to test "optimistic" action is undone when there is an error:
    // return Observable.throw(new AppError());

        // this.http.delete(this.url + '/' + post.id)
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json())
      .catch(this.handleError);
      // since code is repeated, taken out to re-useable function/method below
      // .catch((error: Response) => {
        // if (error.status === 404) {
        //   return Observable.throw(new NotFoundError());
        // }
        // return Observable.throw(new AppError(error));
      // });
  }

  private handleError(error: Response) {
      if (error.status === 404) {
        return Observable.throw(new NotFoundError());
      }
      if (error.status === 400) {
        return Observable.throw(new BadInput(error.json()));
      }
      else {
        return Observable.throw(new AppError(error));
      }
  }

}
