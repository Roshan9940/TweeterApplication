import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  @Input() Name:any;
  image=sessionStorage.getItem("profilePic");
  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
     
  }
  handleLogout(){
    sessionStorage.clear();
    this.router.navigate(["/"])
  }
}