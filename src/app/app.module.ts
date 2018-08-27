import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SharedModule } from './shared/shared.module';
import { Routing } from './app.routes';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AcCoreModule } from 'ac-core';
import { BonorumtourCoreModule, BonorumProxy } from 'bonorumtour-core';
import { MainComponent } from './main/main.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { GalleryComponent } from './gallery/gallery.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormsModule } from '@angular/forms';

let env = 'dev';
if (environment.production) {
  env = 'prod';
}

const projectConfig = {
  env: env,
  company: 'bonorumtour',
  providers: []
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CotizadorComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AcCoreModule.forRoot(projectConfig),
    BonorumtourCoreModule,
    Routing,
    SharedModule,
    ScrollToModule.forRoot(),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [BonorumProxy],
  bootstrap: [AppComponent]
})
export class AppModule {}
