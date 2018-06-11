import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Home2Component } from './home2/home2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Home3Component } from './home3/home3.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home2', component: Home2Component },
  { path: 'home3', component: Home3Component },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  
  declarations: [
    AppComponent,
    NavbarComponent,
    Home2Component,
    HomeComponent,
    Home3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
