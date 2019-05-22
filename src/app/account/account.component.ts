import { Component, OnInit } from '@angular/core';
import { AccountApiService } from '../services/account-api.service';
import IAccountModel from '../share/IAccountModel';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  users: IAccountModel[];

  constructor(private user$: AccountApiService) {
    user$.getListsIndex().subscribe((result: IAccountModel[]) => {
      this.users = result;
    });
  }
  ngOnInit() {}
}
