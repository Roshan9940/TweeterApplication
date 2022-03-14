import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewAllRepliesComponent } from '../view-all-replies/view-all-replies.component';
import { SendReplyComponent } from '../send-reply/send-reply.component';

@Component({
  selector: 'app-view-all-tweets',
  templateUrl: './view-all-tweets.component.html',
  styleUrls: ['./view-all-tweets.component.css']

})
export class ViewAllTweetsComponent implements OnInit {
  tabName="ViewAllTweets"
  allTweets:any=[]
  userName=sessionStorage.getItem('userName');

  constructor(private http: HttpClient,private router: Router, private dialogRef:MatDialog) {
    this.http.get<any>('http://localhost:8255/api/Tweets/ViewAllTweet')
      .subscribe(
        response=>{
          for(var val in response)
          {
            this.allTweets.push(response[val])
          }
        }
        );
    }

  ngOnInit(): void {

    }
    onReplies(id:any){
      this.dialogRef.open(ViewAllRepliesComponent,{width:'800px',height:'1200px',data:{
        id:id
       }});
    }
    onReply(id:any){
      this.dialogRef.open(SendReplyComponent,{width:'600px',height:'200px',data:{
        id:id,
        userName:this.userName
       }});
    }
    onLike(tweetId:any,tweetLikes:any){
      this.http.post('http://localhost:8255/api/Tweets/LikeTweet?tweetId='+tweetId+'&tweetLikes='+tweetLikes,null)
      .subscribe(
        
        response=>console.log(response));
        window.location.reload();
    }

}
