import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

    pessoas : Array<Pessoa>;
    pessoa : Pessoa;
    
  constructor() { }

  ngOnInit() {

    this.pessoas = new Array();
    this.pessoa = new Pessoa();
  }

  salvar(){
    if(this.pessoa.nome == null || this.pessoa.sobrenome == null || this.pessoa.sexo == null){
        alert("Insira todos os campos!");
    }
    else if(this.pessoa.id == null){

      this.pessoa.id = this.pessoas.length + 1;
      this.pessoas.push(this.pessoa);
    }
    else {
      this.pessoas[this.pessoa.id] = this.pessoa;
    }
    this.pessoa = new Pessoa();

  }

  excluir (idRemover : number) {
    let posicao =  this.pessoas.findIndex(pessoa => pessoa.id === idRemover);
    this.pessoas.splice(posicao, 1);
  }

  alterar (idAlterar : number){
    let posicao =  this.pessoas.findIndex(pessoa => pessoa.id === idAlterar);
    let alterado = this.pessoas[posicao];
    this.pessoa.id = posicao;
    this.pessoa.nome = alterado.nome;
    this.pessoa.sobrenome = alterado.sobrenome;
    this.pessoa.sexo = alterado.sexo;
  }

}
