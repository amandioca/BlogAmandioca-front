import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.name

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      alert('Your session has expired! Login again')
      this.router.navigate(['/login'])
    }
  }
}
