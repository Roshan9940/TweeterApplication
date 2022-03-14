import { HttpClient } from '@angular/common/http';
import { Component,Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-my-tweet',
  templateUrl: './edit-my-tweet.component.html',
  styleUrls: ['./edit-my-tweet.component.css']
})
export class EditMyTweetComponent implements OnInit {
  tweetId:any;
  tweets:any=[];
  userId = sessionStorage.getItem("userId")

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private http:HttpClient,private router:Router,private dialogRef:MatDialogRef<null,null>) { 
    this.tweetId=data.id;
  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8255/api/Tweets/MyTweets?UserId=' + this.userId)
      .subscribe(
        response=>{
          for(var val in response)
          {
            this.tweets.push(response[val])
          }
        },err => {
          console.log("Something Went Wrong Please Try Again Later");
        }
        );
  }
  onSubmit(editedTweet:NgForm)
  {
    console.log(editedTweet.value);
    let data:{tweetId:any,tweet:string}
    data={tweetId:this.tweetId,tweet:editedTweet.value.tweet}
    this.http.put('http://localhost:8255/api/Tweets/EditMyTweet',data)
    .subscribe((response:any)=>{
      console.log(response);
    },err => {
      console.log("Something Went Wrong Please Try Again Later");
    });
    window.location.reload();
     this.dialogRef.close()
      
  }
  onCancel()
  {
    this.dialogRef.close()
  }

}
