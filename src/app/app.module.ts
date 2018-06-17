import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AcCoreModule, CoreProxies } from 'ac-core';

let env = 'dev';
if (environment.production) {
  env = 'prod';
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AcCoreModule.forRoot({
      env: env,
      company: 'bayres',
      providers: [
        {
          provider: 'google',
          key:
            '639646112390-c3jcsiq36j19hp3kbdr13dsmv03jqd7r.apps.googleusercontent.com'
        }
      ]
    })
  ],
  providers: [CoreProxies],
  bootstrap: [AppComponent]
})
export class AppModule {}
