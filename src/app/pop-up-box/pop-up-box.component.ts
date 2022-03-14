import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up-box',
  templateUrl: './pop-up-box.component.html',
  styleUrls: ['./pop-up-box.component.css']
})
export class PopUpBoxComponent implements OnInit {
  content:any;
  button:any;
  route:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private http:HttpClient,private router:Router,private dialogRef:MatDialogRef<null,null>) { 
    this.content=data.boxContent;
    this.button=data.buttonContent;
    this.route=data.route;
  }

  ngOnInit(): void {
  }
  redirect()
  {
    this.router.navigate([this.route]);
    this.dialogRef.close();
  }
}
