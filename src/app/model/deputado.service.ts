import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeputadoService {
  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'https://dadosabertos.camara.leg.br/api/v2/';
  }

  /** retorna as informações de todos os deputados e deputadas */
  obterDeputados(): Observable<any> {
    return this.http.get<any>(
      `${this.URL}/deputados?ordem=ASC&ordenarPor=nome`
    );
  }

  obterDeputadoPorNome(nome: string) {
    return this.http.get<any>(
      `${this.URL}deputados?nome=${nome}&ordem=ASC&ordenarPor=nome`
    );
  }
  obterDeputadoPorPartido(nome: string): Observable<any> {
    return this.http.get<any>(
      `${this.URL}deputados?siglaPartido=${nome}&ordem=ASC&ordenarPor=nome`
    );
  }
  obterDeputadoPorUF(nome: string): Observable<any> {
    return this.http.get<any>(
      `${this.URL}deputados?siglaUf=${nome}&ordem=ASC&ordenarPor=nome`
    );
  }
}
