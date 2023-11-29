import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private authentication: AuthService, private builder: FormBuilder, private route: Router) { 
    sessionStorage.clear();
  }
  submit: boolean = false
  loginForm: FormGroup | any;

  get inputControls() {
    return this.loginForm.controls
  }
  ngOnInit(): void {
    this.loginForm = this.builder.group({
      userName: this.builder.control('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
      password: this.builder.control('', [Validators.required]),
    });
  }

  onLoginSubmitForm() {
    
    this.submit = true;
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;
  
  
    this.authentication.login(userName,password).subscribe((res: any) => {
      if (Array.isArray(res)) {
        const user = res.find((data: { userName: any; password: any }) => {
          return data.userName === userName && data.password === password;
        });
  
        if (user) {
          sessionStorage.setItem('userName', JSON.stringify(user.id));
          this.route.navigate(['/home']);
        } else {
          alert('Invalid Credentials');
        }
      } else {
        console.error('API response is not an array');
      
      }
    });
  }
  
  
  }







