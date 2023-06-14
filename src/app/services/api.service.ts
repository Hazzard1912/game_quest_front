import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { MejoresValorados } from '../interfaces/interface';
import { Observable, map } from 'rxjs';
import { DetalleJuego, Result } from '../interfaces/detalle.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = environment.baseUrl;
  key: string = environment.key;

  constructor(private http: HttpClient) {}

  mejoresValorados(): Observable<MejoresValorados> {
    const url = `${this.baseUrl}/games?key=${this.key}&ordering=-rating`;
    return this.http.get<MejoresValorados>(url);
  }

  buscarJuego(juego: string): Observable<Result> {
    const url = `${this.baseUrl}/games?key=${this.key}&search=${juego}`;
    return this.http
      .get<DetalleJuego>(url)
      .pipe(map((juego) => juego.results[0]));
  }

  buscarPorGenero(genero: string): Observable<Result[]> {
    const url = `${this.baseUrl}/games?key=${this.key}&genres=${genero}`;
    return this.http.get<DetalleJuego>(url).pipe(map((juego) => juego.results));
  }
}
