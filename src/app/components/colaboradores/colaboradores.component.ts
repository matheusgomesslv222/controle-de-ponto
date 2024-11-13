import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../../services/colaborador.service';
import { Colaborador, ApiResponse } from '../../../Colaborador';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css'
})
export class ColaboradoresComponent implements OnInit {
  title = 'Colaboradores';
  colaboradores: Colaborador[] = [];

  constructor(private colaboradorService:ColaboradorService) {}

  

  ngOnInit(): void {
    this.colaboradorService.getColaboradores().subscribe({
      next: (response: ApiResponse) => {
        this.colaboradores = response.dados; 
        console.log('Colaboradores', this.colaboradores);
      },
      error: (error) => {
        console.error('Erro ao buscar colaboradores', error);
      }
    });
  }

  desativarColaboradores(idColaborador:number): void  {
    console.log('Desativar colaborador :', idColaborador);
    this.colaboradorService.desativarColaborador(idColaborador).subscribe({
      next: (response: ApiResponse) => {
        console.log('Colaborador desativado com sucesso', response);
        this.colaboradores = this.colaboradores.filter((colaborador) => colaborador.idColaborador !== idColaborador);
      },
      error: (error) => {
        console.error('Erro ao desativar colaborador', error);
      }
    })
  }

  atualizarColaborador(colaborador: Colaborador): void {
    console.log('Atualizar colaborador :', colaborador);
    this.colaboradorService.atualizarColaborador(colaborador).subscribe({
      next: (response: ApiResponse) => {
        console.log('Colaborador atualizado com sucesso', response);
        this.colaboradores = this.colaboradores.map((colaborador) => {
          if (colaborador.idColaborador === colaborador.idColaborador) {
            return colaborador;
          }
          return colaborador;
        });
      },
      error: (error) => {
        console.error('Erro ao atualizar colaborador', error);
      }
    })
  }

}
