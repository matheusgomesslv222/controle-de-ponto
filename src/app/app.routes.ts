import { RouterModule, Routes } from '@angular/router';
import { ControleDePontoComponent } from './components/controle-de-ponto/controle-de-ponto.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: ControleDePontoComponent },
    { path: 'controle-de-ponto', component: ControleDePontoComponent },
    { path: 'relatorios', component: RelatoriosComponent },
    { path: 'colaboradores', component: ColaboradoresComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class appRoutingProviders { }
