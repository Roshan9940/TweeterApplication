import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {
  tabLabel="ViewAllUsers"
  allUsers:any=[];

  constructor( private http: HttpClient) { 
    this.http.get<any>('https://tweeterapi918664.azurewebsites.net/api/NewUserRegisteration/GetUserDetails')
      .subscribe(
        response=>{
          for(var val in response)
          {
            this.allUsers.push(response[val])
          }
        }
        );
  }

  ngOnInit(): void {
  }

}
