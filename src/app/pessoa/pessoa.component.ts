import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa';
import { HttpClient } from 'selenium-webdriver/http';
import { PessoaService } from '../pessoa.service';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

    pessoas : Array<Pessoa>;
    pessoa : Pessoa;
    gereros : Array<String>;
    service : HttpClient;
    
  constructor(private servicePessoas : PessoaService) { }

  ngOnInit() {

    this.pessoas = new Array();
    this.pessoa = new Pessoa();
    this.gereros = ['Outros' , 'Masculino' , 'Feminino'];
    
  }

  salvar(){
    if(this.pessoa.nome == null || this.pessoa.sobrenome == null || this.pessoa.sexo == null){
        alert("Insira todos os campos! ");
    }
    else if(this.pessoa.id == null){

      this.pessoa.id = this.pessoas.length + 1;
      this.pessoas.push(this.pessoa);
    }
    else {
      this.buscarPosicao(this.pessoa.id)
      this.pessoas[this.pessoa.id] = this.pessoa;
    }
    this.pessoa = new Pessoa();

  }

  excluir (idRemover : number) {
    let posicao = this.buscarPosicao(idRemover);
    this.pessoas.splice(posicao, 1);
  }

  alterar (pessoa : Pessoa){
      this.pessoa = Object.create(pessoa);
  }
  buscarPosicao(id:number) : number{
    return this.pessoas.findIndex(pessoa => pessoa.id === id);
  }
  buscartodas (){
    this.servicePessoas.getPessoas().subscribe(pessoa => this.pessoas = pessoa);

  }

}
