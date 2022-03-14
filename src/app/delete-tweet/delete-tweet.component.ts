import { HttpClient } from '@angular/common/http';
import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-tweet',
  templateUrl: './delete-tweet.component.html',
  styleUrls: ['./delete-tweet.component.css']
})
export class DeleteTweetComponent implements OnInit {
  tweetId:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private http:HttpClient,private router:Router,private dialogRef:MatDialogRef<null,null>) { 
    this.tweetId=data.id;
  }

  ngOnInit(): void {
  }
  onConfirm()
  {
    this.http.delete('http://localhost:8255/api/Tweets/DeleteMyTweet?tweetId='+this.tweetId)
      .subscribe(err => {
        console.log("Something Went Wrong Please Try Again Later");
      })
    window.location.reload();
    this.dialogRef.close()
      
  }
  onCancel()
  {
    this.dialogRef.close()
  }
}
