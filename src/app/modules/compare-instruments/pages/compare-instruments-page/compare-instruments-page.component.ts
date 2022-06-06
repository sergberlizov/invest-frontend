import { Component, OnInit } from '@angular/core';
import { UserService } from '@fnc-core/services/user/user.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class CompareInstrumentsPageComponent implements OnInit {
  userFullName = '';

  constructor(private readonly user: UserService) {}

  ngOnInit() {
    this.userFullName = `${this.user.profile.firstName} ${this.user.profile.lastName}`;
  }
}
