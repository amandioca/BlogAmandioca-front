import { ThemeService } from './../service/theme.service';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/Tema';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  theme: Tema = new Tema()
  listTheme: Tema[]

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.findAllThemes()

    if(environment.token == ''){
      alert('Your session has expired! Login again')
      this.router.navigate(['/login'])
    }
  }

  findAllThemes() {
    this.themeService.getAllTheme().subscribe((resp: Tema[]) =>{
      this.listTheme = resp
    })
  }

  register(){
    this.themeService.postTheme(this.theme).subscribe((resp: Tema) =>{
      this.theme = resp
      alert('registered theme!')
      this.findAllThemes()
      this.theme = new Tema()
    })
  }
}
