import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:User[];
  constructor(
    private userService:UserService
  ) { }

  ngOnInit() {
    this.userService.getAll()
    .subscribe(
      response => {this.users = response.data as User[]},
      error => {console.log(error)}
    );
  }

  delete(id) {
    this.userService.delete(id)
    .subscribe(
      response => {console.log(response), this.ngOnInit()},
      error => {console.log(error)}
    );
  }

}
