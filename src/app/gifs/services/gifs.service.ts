import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../gifs.module.interfaces';

@Injectable({
  //Indica que el servicio
  //estara disponible de manera global
  //en la apiclacion,
  //De esta manera, no es
  //necesario importarlo en los providers de los modulos
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];
  public gifs: Gif[] = [];
  private url_service: string = 'https://api.giphy.com/v1/gifs';
  private api_key: string = '8n9FK56rwg6GroC3x1snJROFro9iZm9A';

  //El HttpClient funciona de manera
  //global gracias a que se
  //importo en el modulo
  //principal de  la app
  constructor(private http: HttpClient) {
    const localGifsHistory: string | null = localStorage.getItem(
      'gifs_history'
    );

    const localGifsLastResults: string | null = localStorage.getItem(
      'gifs_last_results'
    );

    if (localGifsHistory) {
      this._history = JSON.parse(localGifsHistory) || [];
    }

    if (localGifsLastResults) {
      this.gifs = JSON.parse(localGifsLastResults) || [];
    }
  }

  get history(): string[] {
    //Se retorna de esta
    //forma para romper
    //la referencia al original
    return [...this._history];
  }

  searchGifs(query: string = '') {
    const formattedQuery = query.trim().toLowerCase();

    if (!formattedQuery.length) return;

    if (!this._history.includes(formattedQuery)) {
      this._history.unshift(formattedQuery);
    }

    if (this._history.length >= 10) {
      this._history.pop();
    }

    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('limit', '10')
      .set('q', formattedQuery);

    //la get request es un generico
    //por lo tanto se recomienda
    //poner el type de la response en
    // el get< generic_type >
    this.http
      .get<SearchGifsResponse>(`${this.url_service}/search`, {
        params,
      })
      .subscribe((res) => {
        this.gifs = res.data;

        localStorage.setItem('gifs_last_results', JSON.stringify(this.gifs));
      });

    localStorage.setItem('gifs_history', JSON.stringify(this._history));
  }
}
