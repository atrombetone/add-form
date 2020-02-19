import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FprincipalComponent } from './pages/fprincipal/fprincipal.component';

const routes: Routes = [
  { path: '**', component: FprincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
