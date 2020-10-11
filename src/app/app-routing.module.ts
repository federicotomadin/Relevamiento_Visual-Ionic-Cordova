import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'test-usuario',
    loadChildren: () => import('./test-usuario/test-usuario.module').then( m => m.TestUsuarioPageModule)
  },
  {
    path: 'spinner',
    loadChildren: () => import('./spinner/spinner.module').then( m => m.SpinnerPageModule)
  },
  {
    path: 'buenas',
    loadChildren: () => import('./buenas/buenas.module').then( m => m.BuenasPageModule)
  },
  {
    path: 'malas',
    loadChildren: () => import('./malas/malas.module').then( m => m.MalasPageModule)
  },
  {
    path: 'galeria-buenas',
    loadChildren: () => import('./galeria-buenas/galeria-buenas.module').then( m => m.GaleriaBuenasPageModule)
  },
  {
    path: 'galeria-malas',
    loadChildren: () => import('./galeria-malas/galeria-malas.module').then( m => m.GaleriaMalasPageModule)
  },
  {
    path: 'galeria-mis-buenas',
    loadChildren: () => import('./galeria-mis-buenas/galeria-mis-buenas.module').then( m => m.GaleriaMisBuenasPageModule)
  },
  {
    path: 'galeria-mis-malas',
    loadChildren: () => import('./galeria-mis-malas/galeria-mis-malas.module').then( m => m.GaleriaMisMalasPageModule)
  },
  {
    path: 'grafico-buenas',
    loadChildren: () => import('./grafico-buenas/grafico-buenas.module').then( m => m.GraficoBuenasPageModule)
  },
  {
    path: 'grafico-malas',
    loadChildren: () => import('./grafico-malas/grafico-malas.module').then( m => m.GraficoMalasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
