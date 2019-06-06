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
  industries = [
    {id: 1, name: 'Agriculture'},
    {id: 2, name: 'Manufacturing'},
    {id: 3, name: 'Energy'},
    {id: 4, name: 'Transportation'},
    {id: 5, name: 'Finance'}
  ];

  constructor(private user$: AccountApiService) {
    user$.getListsIndex().subscribe((result: IAccountModel[]) => {
      this.users = result;
    });
  }

  submitCompany(form) {
    console.log(form);
    console.log(form.value);
    alert('The form was submitted');
    form.reset();
  }

  ngOnInit() {}
}
