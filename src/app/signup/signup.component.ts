import { Router, RouterModule } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  usuario: Usuario = new Usuario();
  confirm: string;
  type: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmPassword(event: any) {
    this.confirm = event.target.value;
  }

  userType(event: any) {
    this.type = event.target.value;
  }

  register() {
    this.usuario.tipo = this.type

    if(this.usuario.senha != this.confirm) {
      alert('Passwords do not match. Try one more time')

    } else{
      this.authService.signup(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/login'])
        alert('Successfully registered user')
      })
    }
  }

}
