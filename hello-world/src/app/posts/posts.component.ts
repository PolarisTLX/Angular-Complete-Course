// this file is just about getting fake data from a simluated server
// from jsonplaceholder.typicode.com

import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
// above not needed now that we have it in the service that is imported below
import { PostService } from './../services/post.service';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit  {


  // GETTING DATA FROM THE SERVER:

  posts: any[];

  // this was moved to post.service.ts
  // private url = 'http://jsonplaceholder.typicode.com/posts';


  // ngOnInit is an Angular "Lifecycle Hook"
  // it's a faster / better way to make HTTP calls:
  // instead of constructors like below.
  // NOTE still need the 1 line of constructor

  // constructor(private http: Http) { }
  // using post.services.ts to make components more single tasked
  constructor(private service: PostService) { }

  ngOnInit() {
    // this.http.get(this.url)
    // like went into post.service.ts
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      });
  }
  /*
  constructor(private http: Http) {
    // http.get('http://jsonplaceholder.typicode.com/posts')
    // shortened by putting into variable above
    http.get(this.url)
      .subscribe(response => {
        // console.log(response);
        // console.log(response.json());
        this.posts = response.json();
      });
  }  */


  // SENDING DATA TO THE SERVER:

  // createPost(title: HTMLInputElement) {
  createPost(input: HTMLInputElement) {
    // let post = { title: title.value}
    let post: any = { title: input.value};

    // clear the input field and user presser enter:
    input.value = '';

    // doesnt work since moving things with post.service.ts
    // this.http.post(this.url, JSON.stringify(post))
    this.service.createPosts(post)
      .subscribe(response => {
        post.id = response.json().id;
        this.posts.splice(0, 0, post);
        // to add something to the top of the list:
        // .splice(starting positiong, # of items to delete, what you want to add at this location)
        console.log(response.json());
      });
  }


  // UPDATING DATA TO THE SERVER:

  updatePost(post) {
    // .put() and .patch() are same, but .patch() is to update just small details
    // .patch() is not widely supported

    // this.http.patch(this.url, JSON.stringify({ isRead: true })
    // the one above is a small part of the "post" object, so is smaller packet of information to send
    // this.http.put(this.url + '/' + post.id, JSON.stringify(post))
    this.service.updatePosts(post)
    // this.url targets the whole "posts" section,
    // "this.url + '/' + post.id" targets the 1 specific post that was interacted with
          .subscribe(response => {
        console.log(response.json());
      });
  }


  // DELETING DATA FROM THE SERVER:

  deletePost(post) {
    // this.http.delete(this.url + '/' + post.id)
    this.service.deletePosts(post.id)
      .subscribe(response => {
        let indexOfPost = this.posts.indexOf(post);
        this.posts.splice(indexOfPost, 1);
      });
  }


}
