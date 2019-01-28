import { Component, OnInit } from '@angular/core';

import { LoginService, LoginUser } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { error } from 'util';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: LoginUser;
  errormsg: string;

  values: any;
  constructor(private router: Router, private loginservice: LoginService) {}

  ngOnInit() {}
  async login(f: NgForm) {
    const loginsdetails = await this.loginservice.login(f.value).toPromise();
    // console.log(loginsdetails.json());
    const key = loginsdetails.json();
    // console.log(typeof key);
    // console.log(key);
    // this.loginservice.login(f,value).subscribe(success => {},failure => {});
    if (key === 0) {
      this.errormsg = 'Enter valid credintials';
      return;
    }

    if (f.value.emailid === 'admin@gmail.com') {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['exam']);
    }
  }
}
