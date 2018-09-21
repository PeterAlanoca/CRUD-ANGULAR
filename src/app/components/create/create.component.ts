import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user:User;

  constructor(
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  create(data) {
    this.user = new User(0, data.name, data.email, '');
    this.userService.insert(this.user)
    .subscribe(
      response => {console.log(response), this.router.navigate(['/'])},
      error => {console.log(error)}
    );
  }
}
