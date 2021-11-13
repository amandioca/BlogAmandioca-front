import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    private http: HttpClient
  ) { }

    token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }

    refreshToken(){
      this.token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
    }

    getAllTheme(): Observable<Tema[]>{
      return this.http.get<Tema[]>('https://amandioca.herokuapp.com/temas', this.token)
    }

    postTheme(tema: Tema): Observable<Tema>{
      return this.http.post<Tema>('https://amandioca.herokuapp.com/temas', tema, this.token)
    }

}
