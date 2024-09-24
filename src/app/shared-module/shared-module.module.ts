import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ],
  exports: [SidebarComponent, HeaderComponent]
})
export class SharedModuleModule { }
