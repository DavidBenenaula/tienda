import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ErrorComponent } from './error/error.component';
import { CartComponent } from './Views/cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: DetallesComponent }, // Ruta dinámica
  { path: 'cart', component: CartComponent }, // Ruta dinámica
  { path: '**', component: ErrorComponent },
];