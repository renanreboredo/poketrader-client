import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { textChangeRangeIsUnchanged } from 'typescript';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(_ => {
      this.router.navigateByUrl('generation')
    });
  }

}
