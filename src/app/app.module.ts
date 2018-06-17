import { Routing } from './app.routes';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AcCoreModule, CoreProxies } from 'ac-core';
import { MainComponent } from './main/main.component';

let env = 'dev';
if (environment.production) {
  env = 'prod';
}

const projectConfig = {
  env: env,
  company: 'bayres',
  providers: [
    {
      provider: 'google',
      key:
        '639646112390-c3jcsiq36j19hp3kbdr13dsmv03jqd7r.apps.googleusercontent.com'
    }
  ]
};

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AcCoreModule.forRoot(projectConfig),
    Routing
  ],
  providers: [CoreProxies],
  bootstrap: [AppComponent]
})
export class AppModule {}
