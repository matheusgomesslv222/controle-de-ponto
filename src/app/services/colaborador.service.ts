import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colaborador, ApiResponse} from '../../Colaborador';


@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  private apiUrl = 'https://localhost:7023/api/Colaboradores/';

  constructor(private http: HttpClient) { }

  getColaboradores(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}GetColaboradores`);
  }

  desativarColaborador(idColaborador: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}DeletarColaborador/${idColaborador}`);
  }

  atualizarColaborador(colaborador: Colaborador): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}AtualizarColaborador`, colaborador);
  }
}