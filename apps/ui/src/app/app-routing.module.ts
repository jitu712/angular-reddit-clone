import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeContainerComponent } from './components/home/home-container.component';
import { SubredditListComponent } from './components/subreddit-list/subreddit-list.component';
import { SubredditContainerComponent } from './components/subreddit/subreddit-container.component';
import { UserContainerComponent } from './components/user/user-container.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'rnd', loadChildren: () => import('./rnd/rnd.module').then(m => m.RndModule) },
  { path: 'subreddit/:subredditname', component: SubredditContainerComponent },
  { path: 'user/:username', component: UserContainerComponent },
  { path: 'subreddits', component: SubredditListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
