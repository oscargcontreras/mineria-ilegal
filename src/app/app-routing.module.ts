import { InicioComponent } from './inicio/inicio.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { MineriaIlegalComponent } from './mineria-ilegal/mineria-ilegal.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'quienesSomos', component: QuienesSomosComponent },
  { path: 'mineriaIlegal', component: MineriaIlegalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
