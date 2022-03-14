import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PopUpBoxComponent } from '../pop-up-box/pop-up-box.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailId: any;
  password: any;


  constructor(private router: Router, private http: HttpClient, private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }
  onSubmit(loginForm: NgForm) {
    let data: { EmailId: string, Password: string };
    data = { EmailId: this.emailId, Password: this.password };

    this.http.post('http://localhost:8255/api/Login', loginForm.value)
      .subscribe((response: any) => {
        console.log(response.status)
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('userId', response.results[0].UserId);
        sessionStorage.setItem('userName', response.results[0].UserName);
        sessionStorage.setItem('profilePic', response.results[0].ProfilePicture);
        sessionStorage.setItem('emailId', response.results[0].EmailId);
        this.router.navigate(["/userHome"])

      },
        err => {
          this.dialogRef.open(PopUpBoxComponent, {
            width: '400px', height: '200px', data: {
              boxContent: 'Invalid Credentials',
              buttonContent: 'Retry',
              route: '/login'
            }

          });

        });

  }
};



