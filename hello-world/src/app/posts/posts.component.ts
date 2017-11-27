// this file is just about getting fake data from a simluated server
// from jsonplaceholder.typicode.com

import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
// above not needed now that we have it in the service that is imported below
import { PostService } from './../services/post.service';
// to make function.methods single-tasked, seperated error handling:
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input-error';



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
    // this.service.getPosts()
    this.service.getAll()
      .subscribe( posts => this.posts = posts
         // response => {                    //changed with the Map Operator
         //   this.posts = response.json();  //changed with the Map Operator
      // });  // error handling added below:
        // }// ,
        // this error sections was moved to file app-handler.ts since it is repeated alot
        // error => {
           // alert('An unexpected error occured');
           // console.log(error);
        // }
       );
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
    // to add something to the top of the list:  was moved up here to make it "optimistic"
    this.posts.splice(0, 0, post);

    // clear the input field and user presser enter:
    input.value = '';

    // doesnt work since moving things with post.service.ts
    // this.http.post(this.url, JSON.stringify(post))
    // this.service.createPosts(post)
    this.service.create(post)
      .subscribe(
         // response => {   replaced by  Map Operator
         //   post.id = response.json().id;
         newPost => {
            post.id = newPost.id;
           // to add something to the top of the list:
           // this.posts.splice(0, 0, post);  // this was moved up in the chain to make it "optimistic"
           // .splice(starting positiong, # of items to delete, what you want to add at this location)
        },
        // (error: Response) => {
        // created AppError and related files to make this function single-tasked
        (error: AppError) => {
          // when visible user actions is set to "optimistic" but turns out we in fact got an error, then undo that action:
          // in this case it was adding an item to the top of the list, so now remove it:
          this.posts.splice(0, 1);

          // if (error.status === 400) {
            if (error instanceof BadInput) {
            // line below won't work in this example project
            // this.form.setErrors(error.json());
            // changed again for error validation but still wont work in this example
            // this.form.setErrors(error.originalError);
            } else {
              // these two lines were moved to file app-handler.ts since it is repeated alot
              // alert('An unexpected error occured');
              // console.log(error);
              throw error;
          }
        });
  }


  // UPDATING DATA TO THE SERVER:

   updatePost(post) {
    // .put() and .patch() are same, but .patch() is to update just small details
    // .patch() is not widely supported

    // this.http.patch(this.url, JSON.stringify({ isRead: true })
    // the one above is a small part of the "post" object, so is smaller packet of information to send
    // this.http.put(this.url + '/' + post.id, JSON.stringify(post))
    // this.service.updatePosts(post)
    this.service.update(post)
    // this.url targets the whole "posts" section,
    // "this.url + '/' + post.id" targets the 1 specific post that was interacted with
          .subscribe(
          // response => {   //replaced by Map Operator
          //   console.log(response.json());
              updatedPost => {
                console.log(updatedPost);
          }// ,
         // this error sections was moved to file app-handler.ts since it is repeated alot
         // error => {
            // alert('An unexpected error occured');
            // console.log(error);
         // }
       );
  }


  // DELETING DATA FROM THE SERVER:

  deletePost(post) {
    let indexOfPost = this.posts.indexOf(post);  // these 2 lines moved up here to make "optimistic"
    this.posts.splice(indexOfPost, 1);

    // this.http.delete(this.url + '/' + post.id)
    // this.service.deletePosts(345)
    this.service.delete(post.id)
    // to simulate error, sending invalid ID (345 b/c there are less than 345 posts):
    // this.service.deletePosts(345)
      .subscribe(
        // response => {  // modified by Map Operator
        // () => {  // () because we only get an empty object back from this method/function?
        // let indexOfPost = this.posts.indexOf(post);  // these 2 lines moved up here to make "optimistic"
        // this.posts.splice(indexOfPost, 1);           // with above moved up to make "optomistic"
        // }
        null
        ,
        // (error: Response) => {
        // created AppError and related files to make this function single-tasked
        (error: AppError) => {
          // when visible user actions is set to "optimistic" but turns out we in fact got an error, then undo that action:
          // in this case it was deleting an item, so now put it back where it used to be:
          this.posts.splice(indexOfPost, 0, post);

           // if (error.status === 404) {
           if (error instanceof NotFoundError) {
             alert('This post has already been deleted.');
           } else {
             // these two lines were moved to file app-handler.ts since it is repeated alot
             // alert('An unexpected error occured');
             // console.log(error);
             throw error;
           }
        });
  }


}
