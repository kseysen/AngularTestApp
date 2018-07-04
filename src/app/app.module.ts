import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { MatailleComponent } from './mataille/mataille.component';
import { HighlightDirective } from './highlight.directive';
import { LoggerService } from "./services/logger.service";


const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'home', canActivate: [AuthGuard],component: HomeComponent },
  { path: 'home2', canActivate: [AuthGuard],component: Home2Component },
  { path: 'home3', canActivate: [AuthGuard],component: Home3Component },
  { path: 'appareils', canActivate: [AuthGuard],component: Home4Component },
  { path: 'appareils/:id', canActivate: [AuthGuard],component: SingleAppareilComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' },
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
    AuthComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    MatailleComponent,
    HighlightDirective
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
    AuthService,
    AuthGuard,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
