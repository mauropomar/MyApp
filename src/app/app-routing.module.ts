import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PerfilComponent} from './components/perfil/perfil.component';
import {ProductsComponent} from './components/products/products.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [{
      path: 'perfil',
      component: PerfilComponent,
      data: {title: 'Perfil'}
    },{
      path: 'products',
      component: ProductsComponent,
      data: {title: 'Producto'}
    }]
  },
  { path: '',   redirectTo: '/home/perfil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
