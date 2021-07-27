import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { preguntasService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[preguntasService],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    save: new FormControl(''),
  });

  constructor(private authSvc: preguntasService, private router: Router) { }

  ngOnInit(): void {}

  async onLogin(){
    const {email, password} = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email, password);
      if(user){
        this.router.navigate(['home']);
      }
    }
    catch(error){}
  }

}
