import { Component,Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-send-reply',
  templateUrl: './send-reply.component.html',
  styleUrls: ['./send-reply.component.css']
})
export class SendReplyComponent implements OnInit {
  tweetId:any;
  tweets:any=[];
  userName = sessionStorage.getItem("userName")
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private http:HttpClient,private router:Router,private dialogRef:MatDialogRef<null,null>) 
  {
    this.tweetId=data.id;
  }

  ngOnInit(): void {
    
  }
  onSubmit(replyForm:NgForm)
  {
    
    this.http.put("http://localhost:8255/api/Tweets/Reply?tweetId="+this.tweetId+"&reply="+replyForm.value.reply+'&userName='+this.userName,null)
    .subscribe((response:any)=>{
      console.log(response);
    });
    window.location.reload();
     this.dialogRef.close()
      
  }
  onCancel()
  {
    this.dialogRef.close()
  }

}
