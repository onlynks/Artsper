import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';


const routes: Routes = [
  { path: 'authentification', component: LoginComponent},
  { path: '', component: LoginComponent},
  { path: 'catalogue', component: CatalogueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
