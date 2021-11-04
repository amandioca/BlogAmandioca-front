import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { Usuario } from '../model/Usuario';
import { UsuarioDTO } from '../model/UsuarioDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(usuarioLogin: UsuarioDTO): Observable<UsuarioDTO>{
    return this.http.put<UsuarioDTO>('http://localhost:8080/usuarios/login', usuarioLogin)
  }

  signup(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastro', usuario)
  }
}
