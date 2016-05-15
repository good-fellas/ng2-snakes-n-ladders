import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {HomeComponent} from "./components/home.component.ts";
import {NavBarComponent} from "./components/navbar.component.ts";
import {SnakeAdvancerList} from "./components/snake-advancers-list";
import {LadderAdvancerList} from "./components/ladder-advancer-list";
import {GameEngineService} from "./services/gaming-engine";
import {GamePanel} from "./components/game-panel";
import {AboutComponent} from "./components/about.component";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, NavBarComponent, SnakeAdvancerList, LadderAdvancerList],
    providers: [GameEngineService],
    template: ` 
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
@Routes([
    {path: '/home', component: HomeComponent},
    {path: '/about', component: AboutComponent},
    {path: '/', component: HomeComponent}
])
export class AppComponent {
    constructor(public gameEngineService: GameEngineService){
    }
}