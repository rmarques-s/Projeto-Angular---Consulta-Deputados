import { Component, OnInit } from '@angular/core';
import { Deputado } from '../model/deputado';
import { DeputadoService } from '../model/deputado.service';

@Component({
  selector: 'app-pesquisa-deputado',
  templateUrl: './pesquisa-deputado.component.html',
  styleUrls: ['./pesquisa-deputado.component.css'],
})
export class PesquisaDeputadoComponent implements OnInit {
  deputados: Deputado[];
  deputados1: Deputado[];
  deputados2: Deputado[];

  constructor(private ds: DeputadoService) {
    this.deputados = [];
    this.deputados1 = [];
    this.deputados2 = [];
  }

  ngOnInit() {}

  pesquisarDeputado(nome: string) {
    this.ds.obterDeputadoPorNome(nome).subscribe((dep) => {
      this.deputados = dep.dados;
    });
  }
  pesquisaDeputadoPartido(nome: string) {
    this.ds.obterDeputadoPorPartido(nome).subscribe((dep) => {
      this.deputados1 = dep.dados;
    });
  }
  pesquisaDeputadoUF(nome: string) {
    this.ds.obterDeputadoPorUF(nome).subscribe((dep) => {
      this.deputados2 = dep.dados;
    });
  }
}
