import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { appRoutes } from "./app.routes";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticlesService }  from "./services/articles.service"
import { HttpClientModule } from "@angular/common/http";
import { AddArticlesComponent } from './components/add-articles/add-articles.component'
import { APP_CONFIG, AppConfig } from '../app.config';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    AddArticlesComponent,
    NavbarComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,   
    FormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [
    ArticlesService,
    
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
