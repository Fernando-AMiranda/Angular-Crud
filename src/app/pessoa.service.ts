import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa/pessoa';
import { HttpClient } from '@angular/common/http';

const URL_API = "http://treinamento043:8080/pessoa"; 

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http : HttpClient) { }

  public getPessoas() :  Observable<Pessoa[]> {
      return this.http.get<Pessoa[]>(URL_API);
  }
}

