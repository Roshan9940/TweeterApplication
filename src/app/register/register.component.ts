import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { RegisteredSuccessfullyComponent } from '../registered-successfully/registered-successfully.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  profilePic = "data:image/png;base64,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";
  bio = "Please Enter Your Bio";

  constructor(private router: Router, private http: HttpClient, private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }
  onSubmit(registerationForm: NgForm) {

    let data: { EmailId: string, UserName: string, Gender: string, Password: string, MobileNo: string, ProfilePicture: string, Bio: string, DateOfBirth?: string };
    data = { EmailId: registerationForm.value.emailId, UserName: registerationForm.value.fullName, Gender: registerationForm.value.gender, Password: registerationForm.value.password, ProfilePicture: this.profilePic, Bio: this.bio, MobileNo: registerationForm.value.contactNumber, DateOfBirth: registerationForm.value.dateOfBirth };
    console.log(data);
    this.http.post('http://localhost:8255/api/NewUserRegisteration', data)
      .subscribe((response: any) => {
        console.log(response);

      }, err => {
        console.log("Something Went Wrong Please Try Again Later");
      }
      );
    this.dialogRef.open(RegisteredSuccessfullyComponent, { width: '400px', height: '200px' })
  }
}