import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    /*if(environment.token == ''){
      alert('Your session has expired! Login again')
      this.router.navigate(['/login'])
    }*/
  }
}