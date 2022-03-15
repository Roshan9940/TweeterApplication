import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import { TweetPostedSuccessffullyComponent } from '../tweet-posted-successffully/tweet-posted-successffully.component';
import { DeleteTweetComponent } from '../delete-tweet/delete-tweet.component';
import { EditMyTweetComponent } from '../edit-my-tweet/edit-my-tweet.component';
import { ViewAllRepliesComponent } from '../view-all-replies/view-all-replies.component';

@Component({
  selector: 'app-post-my-tweet',
  templateUrl: './post-my-tweet.component.html',
  styleUrls: ['./post-my-tweet.component.css']
})
export class PostMyTweetComponent implements OnInit {
  tabLabel = "PostATweet"
  myTweets:any=[];
  userId = sessionStorage.getItem("userId")
  profilePic = sessionStorage.getItem("profilePic")
  userName = sessionStorage.getItem("userName")


  constructor(private router: Router, private http: HttpClient,private dialogRef:MatDialog) {
   console.log(this.myTweets)
  }
  ngOnInit(): void {

    this.http.get<any>('https://tweeterapi918664.azurewebsites.net/api/Tweets/MyTweets?UserId=' + this.userId)
      .subscribe(
        response=>{
          for(var val in response)
          {
            this.myTweets.push(response[val])
          }
        }
        );
  }
  onSubmit(postTweetForm: NgForm) {
    console.log(postTweetForm.value);
    let data: {
      Tweet: string, Reply: Array<string>,ReplierUserName: Array<string>, 
      TweetLikes:any , UserId: any, UserName: any, ProfilePicture: any
    }
    data = {
      Tweet: postTweetForm.value.tweet, UserId: this.userId, ProfilePicture: this.profilePic,
      UserName: this.userName, Reply: [""], TweetLikes: 0,  ReplierUserName: [""]
    }

    this.http.post('https://tweeterapi918664.azurewebsites.net/api/Tweets/PostMyTweet', data)
      .subscribe((response: any) => {
        console.log(response);
      });
      this.dialogRef.open(TweetPostedSuccessffullyComponent,{width:'350px',height:'250px'})

  }
  onEdit(id:any){
    this.dialogRef.open(EditMyTweetComponent,{width:'600px',height:'200px',data:{
      id:id
     }});
  }
  onReplies(id:any){
    this.dialogRef.open(ViewAllRepliesComponent,{width:'800px',height:'1200px',data:{
      id:id
     }});
  }
  onDelete(id:any){
    
    this.dialogRef.open(DeleteTweetComponent,{width:'400px',height:'200px',data:{
     id:id
    }});
  }
  

}
