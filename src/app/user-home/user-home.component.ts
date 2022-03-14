import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  tabLabel='Home';
  
  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
    
  }
  routePostATweet(){
    this.router.navigate(["/postMyTweet"])
  }
  routeViewAllTweet(){
    this.router.navigate(["/viewAllTweets"])
  }
  routeViewAllUsers(){
    this.router.navigate(["/viewAllUsers"])
  }
  routeEditDetails(){
    this.router.navigate(["/editDetails"])
  }


}
