import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private router: Router) { 

    this.loginForm = this.formBuilder.group({
      email:'',
      password:''
    })    
  }

  ngOnInit(): void {
  }

  onSubmit(formData) {
    this.loginService.login(formData.email, formData.password).subscribe(response => 
      {
        localStorage.setItem('token', response['token']);
        this.router.navigate(['catalogue']);
      });
  }

}
