import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:number;
  params:any;
  user:User;

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    this.userService.get(this.id)
    .subscribe(
      response => { this.user = response.data as User},
      error => { console.log(error) }
    );
  }

  update(user) {
    this.userService.update(user)
    .subscribe(
      response => {console.log(response), this.router.navigate(['/'])},
      error => { console.log(error)}
    );
  }
}
