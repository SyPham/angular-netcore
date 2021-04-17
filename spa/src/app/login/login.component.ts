import { ApiService } from './../../_core/_service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData: FormGroup;
  type;
  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.type = 'login';
    this.initialForm();
  }
  initialForm() {
    this.formData = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
  login() {
    this.api.login(this.formData.value).subscribe( (data) => {
      this.router.navigate(['/home']);
      localStorage.setItem('profile', JSON.stringify(data));
    } );
  }
  register() {
    this.api.register(this.formData.value).subscribe(() => {
      this.type = 'login';
      this.initialForm();
      alert('Register successfully!. Please login to use the system!');
    });
  }
  onClickLogin() {
    this.type = 'login';
  }
  onClickRegister() {
    this.type = 'register';
  }
}
