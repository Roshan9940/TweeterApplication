import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registered-successfully',
  templateUrl: './registered-successfully.component.html',
  styleUrls: ['./registered-successfully.component.css']
})
export class RegisteredSuccessfullyComponent implements OnInit {

  constructor(private router:Router,private dialogRef:MatDialogRef<null,null>) { }

  ngOnInit(): void {
  }
  redirect()
  {
    this.router.navigate([""])
    this.dialogRef.close()
  }
}
