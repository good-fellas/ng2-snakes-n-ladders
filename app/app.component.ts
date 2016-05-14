import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BoardComponent} from "./board/board.component";
import {NavBarComponent} from "./home/navbar.component";
import {SnakeAdvancerList} from "./components/snake-advancers-list";
import {LadderAdvancerList} from "./components/ladder-advancer-list";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, NavBarComponent, SnakeAdvancerList, LadderAdvancerList],
    template: `
    <div class="container">
        <div class="row"> 
            <div class="col-md-12"> <h1>Snake & Ladder</h1> </div>
        </div>
        
        <div class="row">
            <div class="col-md-2">
            <snake-advancers-list></snake-advancers-list>
            </div>
            <div class="col-md-2">
            <ladder-advancers-list></ladder-advancers-list>
</div>
        </div>
    </div>
    
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