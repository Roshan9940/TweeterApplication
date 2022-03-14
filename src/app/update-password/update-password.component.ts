import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpBoxComponent } from '../pop-up-box/pop-up-box.component';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  emailId=sessionStorage.getItem("emailId");
  constructor(private http:HttpClient,private router:Router,private dialogRef:MatDialog) { }

  ngOnInit(): void {
  }
  onSubmit(updatePasswordForm:NgForm){
     console.log(updatePasswordForm.value)
     this.http.put('http://localhost:8255/api/ForgotPassword/UpdatePassword?password='+updatePasswordForm.value.password+'&emailId='+this.emailId,null)
     .subscribe((response:any)=>{
      sessionStorage.clear();
      this.dialogRef.open(PopUpBoxComponent, {
        width: '400px', height: '200px', data: {
          boxContent: 'Password Updated',
          buttonContent: 'Continue',
          route: ''
        }
      });
    });
  }
}
