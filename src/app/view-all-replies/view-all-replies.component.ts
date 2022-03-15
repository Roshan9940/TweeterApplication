import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-all-replies',
  templateUrl: './view-all-replies.component.html',
  styleUrls: ['./view-all-replies.component.css']
})
export class ViewAllRepliesComponent implements OnInit {
  tweetId:any;
  Tweet:any=[];
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private http:HttpClient,private router:Router,private dialogRef:MatDialogRef<null,null>) { 
    this.tweetId=data.id;
    this.http.get<any>('https://tweeterapi918664.azurewebsites.net/api/Tweets/GetTweetByTweetId?tweetId='+this.tweetId)
      .subscribe(
        (response:any)=>{
          for(var val in response)
          {
            this.Tweet.push(response[val])
          }
          console.log(response);
        }
        );
  }

  ngOnInit(): void {
  }
  onCancel(){
    this.dialogRef.close()
  }
}
