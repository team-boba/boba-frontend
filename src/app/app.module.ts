import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { CommonModule } from '@angular/common';
import { SharedcomponentsModule } from './sharedcomponents/sharedcomponents.module';
import { MatTableModule } from '@angular/material/table';
import { AuthenticationGuard } from './shared/auth/authentication-guard.service';
import { AuthService } from './shared/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthorizationGuard } from './shared/auth/authorized-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    SharedcomponentsModule,
    MatTableModule
  ],
  providers: [AuthenticationGuard, AuthorizationGuard, AuthService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule { }
