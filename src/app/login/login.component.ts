import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { CredenciaisDTO } from './../model/CredenciaisDTO';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credenciais: CredenciaisDTO = new CredenciaisDTO()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  signin(){
    this.authService.login(this.credenciais).subscribe((resp: CredenciaisDTO) => {
      this.credenciais = resp

      environment.id = this.credenciais.id
      environment.token = this.credenciais.token
      environment.name = this.credenciais.nome
      environment.photo = this.credenciais.foto

      this.router.navigate(['/home'])
    }, error =>{
      if(error.status == 400){
        alert('email or password are incorrect')
      }
    })
  }
}
