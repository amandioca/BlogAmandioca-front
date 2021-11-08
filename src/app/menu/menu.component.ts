import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name = environment.name
  photo = environment.photo

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  out() {
    this.router.navigate(['/login'])
    environment.id
    environment.name
    environment.photo
    environment.token
  }
}
