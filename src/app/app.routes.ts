import { MainComponent } from './main/main.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
