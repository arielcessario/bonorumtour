import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { SharedService } from './shared.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  imports: [
    CollapseModule.forRoot(),
    CommonModule
  ],
  exports: [NavBarComponent, FooterComponent],
  providers: [SharedService]
})
export class SharedModule {}
