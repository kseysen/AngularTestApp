import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { Home2Component } from './home2/home2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';
import { PiloteComponent } from './pilote/pilote.component';
import { AppareilComponent } from './appareil/appareil.component';
import { PiloteService } from './services/pilote.service';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';


const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home2', component: Home2Component },
  { path: 'home3', component: Home3Component },
  { path: 'home4', component: Home4Component },
  { path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  }
];


@NgModule({
  
  declarations: [
    AppComponent,
    NavbarComponent,
    Home2Component,
    HomeComponent,
    Home3Component,
    Home4Component,
    PiloteComponent,
    AppareilComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [
    PiloteService,
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
