import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing-module';

// TODO: create a new module to import all ng2Materialize module objects
import {
  MzButtonModule,
  MzInputModule,
  MzNavbarModule,
  MzSidenavModule,
  MzIconMdiModule,
  MzIconModule,
  MzCollapsibleModule,
  MzSelectModule,
  MzCardModule,
  MzRadioButtonModule,
  MzDatepickerModule,
  MzTimepickerModule,
  MzTextareaModule,
  MzCollectionModule,
  MzModalModule,
  MzSpinnerModule,
  MzProgressModule
} from 'ng2-materialize';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AppGuard } from './auth/app-guard';
import { AuthService } from './auth/auth-service';
import { LoginComponent } from './login/login.component';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    LoadingModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MzButtonModule,
    MzInputModule,
    MzNavbarModule,
    MzSidenavModule,
    MzIconMdiModule,
    MzIconModule,
    MzCollapsibleModule,
    MzSelectModule,
    MzCardModule,
    MzRadioButtonModule,
    MzDatepickerModule,
    MzTimepickerModule,
    MzTextareaModule,
    MzCollectionModule,
    MzModalModule,
    MzSpinnerModule,
    MzProgressModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AppGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
