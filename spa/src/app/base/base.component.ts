import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/_core/_model/profile';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  profile: Profile;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.profile  = JSON.parse(localStorage.getItem('profile'));
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
