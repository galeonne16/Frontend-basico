import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaginasComponent } from './paginas/paginas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: PaginasComponent, loadChildren: './paginas/paginas.module#PaginasModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
