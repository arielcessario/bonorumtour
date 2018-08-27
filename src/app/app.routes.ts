import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { AuthGuard } from 'ac-core';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  // { path: 'cotizador', component: CotizadorComponent},
  { path: 'cotizador', component: CotizadorComponent, canActivate: [AuthGuard] },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
