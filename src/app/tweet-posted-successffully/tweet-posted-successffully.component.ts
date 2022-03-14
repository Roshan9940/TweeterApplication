import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tweet-posted-successffully',
  templateUrl: './tweet-posted-successffully.component.html',
  styleUrls: ['./tweet-posted-successffully.component.css']
})
export class TweetPostedSuccessffullyComponent implements OnInit {

  constructor(private router:Router,private dialogRef:MatDialogRef<null,null>) { }

  ngOnInit(): void {
  }
  redirect()
  {
    window.location.reload();
    this.dialogRef.close()
  }
}
