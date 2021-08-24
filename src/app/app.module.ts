import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { PostComponent } from './components/post/post.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeContainerComponent } from './components/home/home-container.component';
import { PostContainerComponent } from './components/post/post-container.component';
import { MatMenuModule } from '@angular/material/menu';
import { SubredditComponent } from './components/subreddit/subreddit.component';
import { SubredditContainerComponent } from './components/subreddit/subreddit-container.component';
import { UserContainerComponent } from './components/user/user-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FabComponent } from './components/fab/fab.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { CreatesubredditComponent } from './components/create/createsubreddit/createsubreddit.component';
import { CreatepostComponent } from './components/create/createpost/createpost.component';
import { CreateOptionsSheet } from './components/footer/create-options-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SubredditListComponent } from './components/subreddit-list/subreddit-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    PostComponent,
    HomeContainerComponent,
    PostContainerComponent,
    SubredditComponent,
    SubredditContainerComponent,
    UserContainerComponent,
    FooterComponent,
    HeaderComponent,
    FabComponent,
    CreateOptionsSheet,
    CreatesubredditComponent,
    CreatepostComponent,
    SubredditListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyMaterialModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
