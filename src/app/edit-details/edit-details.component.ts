import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import { PopUpBoxComponent } from '../pop-up-box/pop-up-box.component';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  tabLabel='EditDetails';
  user:any=[]
  userId=sessionStorage.getItem("userId");
  emailId:any;
  userName:any;
  dateOfBirth:any;
  password:any;
  mobileNo:any;
  gender:any;
  bio:any;
  profilePic:any;
  url:any;
  newImage: any;

  constructor(private http:HttpClient,private router:Router,private dialogRef:MatDialog) {
    console.log(this.user);
    this.http.get('http://localhost:8255/api/NewUserRegisteration/GetUserDetailsByUserId?userId='+this.userId)
    .subscribe((response:any)=>{
      sessionStorage.setItem('password',response[0].Password);
        sessionStorage.setItem('mobileNo',response[0].MobileNo);
        sessionStorage.setItem('bio',response[0].Bio);
        sessionStorage.setItem('userName',response[0].UserName);
        sessionStorage.setItem('gender',response[0].Gender);        
        sessionStorage.setItem('dateOfBirth',response[0].DateOfBirth);
        sessionStorage.removeItem('profilePic');
        sessionStorage.setItem('profilePic',response[0].ProfilePicture);
        if(localStorage.getItem('c')==null)
        {
          localStorage.setItem('c','c')
          window.location.reload();
          
        }
        else{
          localStorage.clear()
        }
    });
    this.ngOnInit()
   }
 

  ngOnInit(): void {
    this.emailId= sessionStorage.getItem('emailId');
    this.userName=sessionStorage.getItem('userName');
    this.dateOfBirth=sessionStorage.getItem('dateOfBirth');
    this.password=sessionStorage.getItem('password');
    this.mobileNo=sessionStorage.getItem('mobileNo');
    this.gender=sessionStorage.getItem('gender');
    this.bio=sessionStorage.getItem('bio')
    this.profilePic=sessionStorage.getItem('profilePic')
    this.url=this.profilePic
  }
  onSubmit(registerationForm:NgForm){
    console.log(registerationForm.value);
    let data : {EmailId:string,UserName:string,Gender:string,Password:string,MobileNo:string,
      ProfilePicture:any,Bio:any,DateOfBirth:any,UserId:any};
    data = {EmailId:registerationForm.value.emailId,UserName:registerationForm.value.fullName,Gender:registerationForm.value.gender,Password:registerationForm.value.password,
      UserId:this.userId,ProfilePicture:this.profilePic,Bio:registerationForm.value.bio,MobileNo:registerationForm.value.contactNumber,DateOfBirth:this.dateOfBirth};
    this.http.put('http://localhost:8255/api/NewUserRegisteration/UpdateDetails',data)
    .subscribe((response:any)=>{
      console.log(response);
    });
    this.dialogRef.open(PopUpBoxComponent,{width:'400px',height:'200px',data:{
      boxContent:'Details Updated Successfully',
      buttonContent:'Proceed',
      route:'/userHome'
     }});
  }
  onChange($event: Event) {
    const file = ($event.target as HTMLInputElement);
    this.convertToBase64(file);
  }

  convertToBase64(file: any) {
    this.newImage = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file.files[0], subscriber);
    });
    
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
  onCancel(){
    window.location.reload();
  }
  onSave(){
    this.newImage.subscribe((d:any)=>{
      let data : {EmailId:string,UserName:string,Gender:string,Password:string,MobileNo:string,
        ProfilePicture:any,Bio:any,DateOfBirth:any,UserId:any};
      data = {EmailId:this.emailId,UserName:this.userName,Gender:this.gender,Password:this.password,
        UserId:this.userId,ProfilePicture:d,Bio:this.bio,MobileNo:this.mobileNo,DateOfBirth:this.dateOfBirth};
      this.http.put('http://localhost:8255/api/NewUserRegisteration/UpdateDetails',data)
      .subscribe((response:any)=>{
        console.log(response);
      });
      window.location.reload();
    });
  }
}