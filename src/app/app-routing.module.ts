import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { PostMyTweetComponent } from './post-my-tweet/post-my-tweet.component';
import { ViewAllTweetsComponent } from './view-all-tweets/view-all-tweets.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { AuthenticationGuardService } from './authentication-guard.service';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'userHome', component:UserHomeComponent,canActivate:[AuthenticationGuardService]},
  { path:"postMyTweet",component:PostMyTweetComponent,canActivate:[AuthenticationGuardService]},
  {path:"viewAllTweets",component:ViewAllTweetsComponent,canActivate:[AuthenticationGuardService]},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"updatePassword",component:UpdatePasswordComponent},
  {path:"editDetails",component:EditDetailsComponent,canActivate:[AuthenticationGuardService]},
  {path:"viewAllUsers",component:ViewAllUsersComponent,canActivate:[AuthenticationGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
