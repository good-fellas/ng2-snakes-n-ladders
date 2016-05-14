import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BoardComponent} from "./board/board.component";
import {NavBarComponent} from "./home/navbar.component";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, NavBarComponent],
    template: `
    <h1>Snake & Ladder</h1>
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
@Routes([
    {path: '/home', component: HomeComponent},
    {path: '/board', component: BoardComponent},
    {path: '/', component: HomeComponent}
])
export class AppComponent {
}