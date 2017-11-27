// this file is all about working with the HTTP Calls / Services

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// to handle errors:
import { DataService } from './data.service';
// these were all for handling errors, but have since all been moved to file above
// import { Observable } from 'rxjs/Observable';
// import { AppError } from './../common/app-error';
// import { NotFoundError } from './../common/not-found-error';
// import { BadInput } from './../common/bad-input-error';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

@Injectable()
// export class PostService {
export class PostService extends DataService {

// now that DataService is a base class to this, the variale need to have "private" removed (it's like var or let).

  // private url = 'http://jsonplaceholder.typicode.com/posts';
  // simulating an ERROR by giving an invalid URL - simluates a "Network is Down" where user cannot reach the destination
  //  private url = 'http://ABCjsonplaceholder.typicode.com/posts';


// constructor(private http: Http) { }
   constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
    // super() is needed if this file is a derived class of a base class. in this case "DataService"
   }


//  ALL METHODS HERE WERE REMOVED AND PLACED IN FILE data.service.ts

  // // this is from the ngOnInit of post.component.ts
  // getPosts() {
  //        // this.http.get(this.url)
  //   return this.http.get(this.url)
  //     .catch(this.handleError);
  // }
  // createPosts(post) {
  //       // this.http.post(this.url, JSON.stringify(post))
  //   return this.http.post(this.url, JSON.stringify(post))
  //     .catch(this.handleError);
  //   // since code is repeated, taken out to re-useable function/method below
  //   // .catch((error: Response) => {
  //   //   if (error.status === 400) {
  //   //     return Observable.throw(new BadInput(error.json()));
  //   //   } else {
  //   //     return Observable.throw(new AppError(error.json()));
  //   //   }
  //   // });
  // }
  // updatePosts(post) {
  //       // this.http.put(this.url + '/' + post.id, JSON.stringify(post))
  //   return this.http.put(this.url + '/' + post.id, JSON.stringify(post))
  //     .catch(this.handleError);
  // }
  // // deletePosts(post) {
  // deletePosts(id) {
  //       // this.http.delete(this.url + '/' + post.id)
  //   return this.http.delete(this.url + '/' + id)
  //     .catch(this.handleError);
  //     // since code is repeated, taken out to re-useable function/method below
  //     // .catch((error: Response) => {
  //       // if (error.status === 404) {
  //       //   return Observable.throw(new NotFoundError());
  //       // }
  //       // return Observable.throw(new AppError(error));
  //     // });
  // }
  //
  // private handleError(error: Response) {
  //     if (error.status === 404) {
  //       return Observable.throw(new NotFoundError());
  //     }
  //     if (error.status === 400) {
  //       return Observable.throw(new BadInput(error.json()));
  //     }
  //     else {
  //       return Observable.throw(new AppError(error));
  //     }
  // }

}
