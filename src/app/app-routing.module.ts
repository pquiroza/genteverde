import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
  { path: 'gente', loadChildren: './gente/gente.module#GentePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
