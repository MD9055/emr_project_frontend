import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { SuperadminModule } from './superadmin/superadmin.module';
import { HeaderInterceptorInterceptor } from './_interceptor/header-interceptor.interceptor';
import { EncryptInterceptorInterceptor } from './_interceptor/encrypt-interceptor.interceptor'; // Add this
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    // SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SuperadminModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
    
      showForeground: true 
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptorInterceptor,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: EncryptInterceptorInterceptor, // Add this
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}