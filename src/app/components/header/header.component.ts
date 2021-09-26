import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  skipLinkPath = "#main-content";
  loggedInUserName!: string | null;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loggedInUserName = this.authService.getUserName();
  }

}
