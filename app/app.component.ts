import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

@Component({
    selector: 'my-app',
    template: `
    <h1>Component Router</h1>
    <nav>
      <a [routerLink]="['/home']">Home</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/home', component: HomeComponent},
    {path: '/',        component: HomeComponent}
])
export class AppComponent { }