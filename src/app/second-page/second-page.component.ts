import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  public user;
  public text;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = this.userService.getAll();
    if (this.user == '' || this.user == 'undefined') {
      this.go();
    } else {
      if (this.user[1] < 51) {
        this.text = 'вы молоды';
      } else {
        this.text = 'вы в возрасте';
      }
    }
  }

  onClick() {
    this.go();
  }

  go() {
    this.router.navigate(['']);
  }

}
