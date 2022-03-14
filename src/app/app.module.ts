import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationGuardService } from './authentication-guard.service';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewAllTweetsComponent } from './view-all-tweets/view-all-tweets.component';
import { PostMyTweetComponent } from './post-my-tweet/post-my-tweet.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegisteredSuccessfullyComponent } from './registered-successfully/registered-successfully.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card' 
import { PopUpBoxComponent } from './pop-up-box/pop-up-box.component';
import { TweetPostedSuccessffullyComponent } from './tweet-posted-successffully/tweet-posted-successffully.component';
import { DeleteTweetComponent } from './delete-tweet/delete-tweet.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { EditMyTweetComponent } from './edit-my-tweet/edit-my-tweet.component';
import { ViewAllRepliesComponent } from './view-all-replies/view-all-replies.component';
import { SendReplyComponent } from './send-reply/send-reply.component';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter(){
  return sessionStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ViewAllTweetsComponent,
    PostMyTweetComponent,
    UserHomeComponent,
    NavigationBarComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent,
    EditDetailsComponent,
    RegisteredSuccessfullyComponent,
    PopUpBoxComponent,
    TweetPostedSuccessffullyComponent,
    DeleteTweetComponent,
    ViewAllUsersComponent,
    EditMyTweetComponent,
    ViewAllRepliesComponent,
    SendReplyComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatCardModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:37571"],
        disallowedRoutes:[]
      }
    })
    
  ],
  providers: [AuthenticationGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
