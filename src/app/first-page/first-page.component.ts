import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-first-page',
	templateUrl: './first-page.component.html',
	styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

	public user;



	userForm = new FormGroup({
		name: new FormControl('', Validators.required),
		age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]),
	});

	constructor(
		private userService: UserService,
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.user = this.userService.getAll();
	}

	go() {
		this.router.navigate(['/second-page']);
	}

	onSubmit() {
		this.addUser(this.userForm.get('name').value, this.userForm.get('age').value );
		this.go();
	}

	addUser(name: string, age: number) {
		this.userService.add(name, age);
		this.userService.getAll();
	}

}
