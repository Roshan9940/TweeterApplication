import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PopUpBoxComponent } from '../pop-up-box/pop-up-box.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient,private dialogRef:MatDialog) { }

  ngOnInit(): void {
  }
  onSubmit(forgotPasswordForm:NgForm){
   console.log(forgotPasswordForm.value);
   this.http.post('https://tweeterapi918664.azurewebsites.net/api/ForgotPassword',forgotPasswordForm.value)
   .subscribe((response:any)=>{
    sessionStorage.setItem('emailId',response[0].EmailId);
    console.log(response);
    if(response=="UnAuthorized")
    {
      this.dialogRef.open(PopUpBoxComponent, {
        width: '400px', height: '200px', data: {
          boxContent: 'Invalid Combination',
          buttonContent: 'Retry',
          route: '/forgotPassword'
        }
      });
    }
    else
     this.router.navigate(["updatePassword"])
  });
  }

}
