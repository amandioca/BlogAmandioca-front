import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(credenciais: CredenciaisDTO): Observable<CredenciaisDTO>{
    return this.http.put<CredenciaisDTO>('https://amandioca.herokuapp.com/usuarios/login', credenciais)
  }

  signup(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://amandioca.herokuapp.com/usuarios/cadastro', usuario)
  }

  logged() {
    let ok = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }
}
